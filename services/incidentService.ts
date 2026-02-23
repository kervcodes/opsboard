import { prisma } from "@/lib/prisma";
import { Severity, Status } from "@/generated/prisma";


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
    const incident = await prisma.incident.findUnique({
        where: { id: input.incidentId },
    })

    if (!incident) {
        throw new Error(`Incident not found!`)
    }

    const currentStatus = incident.status;
    const newStatus = input.newStatus;

    let acknowledgedAt = incident.acknowledgedAt;
    let resolvedAt = incident.resolvedAt;
    let closedAt = incident.closedAt;
    let currentSlaStartAt = incident.currentSlaStartAt;

    switch(currentStatus) {
        case Status.OPEN:
            if (newStatus === Status.INVESTIGATING) {
                acknowledgedAt = new Date();
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
                resolvedAt = new Date();
            } else {
                throw new Error(`Invalid transistion from MITIGATED to ${newStatus}`);
            }
            break;
        case Status.RESOLVED:
            if (newStatus === Status.CLOSED) {
                closedAt = new Date();
            } else if(newStatus === Status.INVESTIGATING) {
                currentSlaStartAt = new Date()
                acknowledgedAt = null;
                resolvedAt = null;
                closedAt = null;
            } else {
                throw new Error(`Invalid transistion from RESOLVED to ${newStatus}`)
            }
            break;
        case Status.CLOSED:
            if (newStatus === Status.INVESTIGATING) {
                currentSlaStartAt = new Date()
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

    const updatedIncident = await prisma.incident.update({
        where: { id: incident.id },
        data: {
        status: newStatus,
        acknowledgedAt,
        resolvedAt,
        closedAt,
        currentSlaStartAt,
        },
    });

    return updatedIncident;
    
}