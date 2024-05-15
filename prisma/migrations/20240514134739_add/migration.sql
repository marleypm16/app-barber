/*
  Warnings:

  - Added the required column `serviceId` to the `Appointments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointments" ADD COLUMN     "serviceId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
