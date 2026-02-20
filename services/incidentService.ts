import { prisma } from "@/lib/prisma";
import { Severity, Status } from "@/generated/prisma";


type CreateIncidentInput = {
    title: string;
    description: string;
    severity: Severity;
    createdById: string;
    ownerId: string;
}

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