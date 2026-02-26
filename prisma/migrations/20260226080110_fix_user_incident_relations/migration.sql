/*
  Warnings:

  - You are about to drop the column `editedAt` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `isEdited` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `acknowledgedAt` on the `Incident` table. All the data in the column will be lost.
  - You are about to drop the column `closedAt` on the `Incident` table. All the data in the column will be lost.
  - You are about to drop the column `currentSlaStartAt` on the `Incident` table. All the data in the column will be lost.
  - You are about to drop the column `resolvedAt` on the `Incident` table. All the data in the column will be lost.
  - You are about to drop the column `slaTargetMinutes` on the `Incident` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('STATUS_CHANGED', 'SEVERITY_CHANGED', 'OWNER_CHANGED');

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_incidentId_fkey";

-- DropIndex
DROP INDEX "Comment_incidentId_idx";

-- DropIndex
DROP INDEX "Incident_ownerId_idx";

-- DropIndex
DROP INDEX "Incident_severity_idx";

-- DropIndex
DROP INDEX "Incident_status_idx";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "editedAt",
DROP COLUMN "isEdited",
DROP COLUMN "type";

-- AlterTable
ALTER TABLE "Incident" DROP COLUMN "acknowledgedAt",
DROP COLUMN "closedAt",
DROP COLUMN "currentSlaStartAt",
DROP COLUMN "resolvedAt",
DROP COLUMN "slaTargetMinutes",
ALTER COLUMN "severity" DROP NOT NULL;

-- CreateTable
CREATE TABLE "IncidentEvent" (
    "id" TEXT NOT NULL,
    "incidentId" TEXT NOT NULL,
    "actorId" TEXT,
    "eventType" "EventType" NOT NULL,
    "metadata" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IncidentEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_incidentId_fkey" FOREIGN KEY ("incidentId") REFERENCES "Incident"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IncidentEvent" ADD CONSTRAINT "IncidentEvent_incidentId_fkey" FOREIGN KEY ("incidentId") REFERENCES "Incident"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IncidentEvent" ADD CONSTRAINT "IncidentEvent_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
