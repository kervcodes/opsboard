/*
  Warnings:

  - Added the required column `currentSlaStartAt` to the `Incident` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Incident` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Incident` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Incident" ADD COLUMN     "acknowledgedAt" TIMESTAMP(3),
ADD COLUMN     "closedAt" TIMESTAMP(3),
ADD COLUMN     "currentSlaStartAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "resolvedAt" TIMESTAMP(3),
ADD COLUMN     "severity" "Severity",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'OPEN',
ADD COLUMN     "title" TEXT NOT NULL;
