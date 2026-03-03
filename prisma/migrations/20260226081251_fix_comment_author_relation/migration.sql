/*
  Warnings:

  - You are about to drop the column `description` on the `Incident` table. All the data in the column will be lost.
  - You are about to drop the column `severity` on the `Incident` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Incident` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Incident` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Incident" DROP COLUMN "description",
DROP COLUMN "severity",
DROP COLUMN "status",
DROP COLUMN "title";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "email",
DROP COLUMN "name",
DROP COLUMN "role";
