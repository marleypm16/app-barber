/*
  Warnings:

  - You are about to drop the column `userId` on the `Appointments` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Appointments" DROP CONSTRAINT "Appointments_userId_fkey";

-- AlterTable
ALTER TABLE "Appointments" DROP COLUMN "userId";
