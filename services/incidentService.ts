import { prisma } from "@/lib/prisma";
import { CommentType, Severity, Status, Role } from "@/generated/prisma";

function buildStatusMessage(from: Status, to: Status) {
    if ((from === Status.RESOLVED || from === Status.CLOSED) && to === Status.INVESTIGATING) {
        return `Incident reopened (from ${from} to ${to})`;
    }
    return `Status changed from ${from} to ${to}`;
}


type CreateIncidentInput = {
    title: string;
    description: string;
    severity: Severity;
    createdById: string;
    ownerId: string;
}

type UpdateStatusInput = {
  incidentId: string;
  newStatus: Status;
  userId: string;
};

const SLA_MAP: Record<Severity, number> = {
    LOW: 240,
    MEDIUM: 120,
    HIGH: 60,
    CRITICAL: 15,
};

export const createIncident = async (input: CreateIncidentInput) => {
    const slaMinutes = SLA_MAP[input.severity];

    if (!slaMinutes) {
        throw new Error('Invalid severity');
    }

    const incident = await prisma.incident.create({
        data: {
            title: input.title,
            description: input.description,
            severity: input.severity,
            status: Status.OPEN,
            slaTargetMinutes: slaMinutes,
            currentSlaStartAt: new Date(),
            ownerId: input.ownerId ?? input.createdById,
            createdById: input.createdById,
        },
    });

    return incident;

}


export const updateStatus = async (input: UpdateStatusInput) => {
    const now = new Date();
    
    const incident = await prisma.incident.findUnique({
        where: { id: input.incidentId },
    })

    if (!incident) {
        throw new Error(`Incident not found!`)
    }
    const user = await prisma.user.findUnique({
        where: {
            id: input.userId
        }
    })

    if (!user) {
        throw new Error(`User not found!`);
    }

    const currentStatus = incident.status;
    const newStatus = input.newStatus;

    let acknowledgedAt = incident.acknowledgedAt;
    let resolvedAt = incident.resolvedAt;
    let closedAt = incident.closedAt;
    let currentSlaStartAt = incident.currentSlaStartAt;

    if (user.role !== Role.ADMIN && user.id !== incident.ownerId) {
        throw new Error("Unauthorized: Only owner or admin can change status");
    }

    switch(currentStatus) {
        case Status.OPEN:
            if (newStatus === Status.INVESTIGATING) {
                acknowledgedAt = now;
            } else if (newStatus === Status.DISCARDED) {
                // nothing happened here
            } else {
                throw new Error(`Invalid transistion from OPEN to ${newStatus}`);
            }
            break;
        case Status.INVESTIGATING:
            if (newStatus === Status.IDENTIFIED) {
                // nothing happened here
            } else if(newStatus === Status.DISCARDED) {
                // nothing happened here
            } else {
                throw new Error(`Invalid transistion from INVESTIGATING to ${newStatus}`);
            }
            break;
        case Status.IDENTIFIED:
            if (newStatus === Status.MITIGATED) {
                // nothing happened here
            } else {
                throw new Error(`Invalid transistion from IDENTIFIED to ${newStatus}`);
            }
            break;
        case Status.MITIGATED:
            if (newStatus === Status.RESOLVED) {
                resolvedAt = now;
            } else {
                throw new Error(`Invalid transistion from MITIGATED to ${newStatus}`);
            }
            break;
        case Status.RESOLVED:
            if (newStatus === Status.CLOSED) {
                closedAt = now;
            } else if(newStatus === Status.INVESTIGATING) {
                currentSlaStartAt = now;
                acknowledgedAt = null;
                resolvedAt = null;
                closedAt = null;
            } else {
                throw new Error(`Invalid transistion from RESOLVED to ${newStatus}`)
            }
            break;
        case Status.CLOSED:
            if (newStatus === Status.INVESTIGATING) {
                currentSlaStartAt = now;
                acknowledgedAt = null;
                resolvedAt = null;
                closedAt = null;
            } else {
                throw new Error(`Invalid transistion from CLOSED to ${newStatus}`);
            }
            break;
        case Status.DISCARDED:
            throw new Error(`Cannot transition from DISCARDED`);

        default:
            throw new Error(`Unhandled current status: ${currentStatus}`);

    }

    const message = buildStatusMessage(currentStatus, newStatus);

    const [updatedIncident] = await prisma.$transaction([
        prisma.incident.update({
            where: { 
                id: incident.id,
                version: incident.version,
            },
            data: {
            status: newStatus,
            acknowledgedAt,
            resolvedAt,
            closedAt,
            currentSlaStartAt,
            version: { increment: 1 },
            },
        }),

        prisma.comment.create({
            data: {
                incidentId: incident.id,
                authorId: input.userId,
                message,
                type: CommentType.SYSTEM_EVENT,
            },
        }),
    ]);   
    return updatedIncident;
}