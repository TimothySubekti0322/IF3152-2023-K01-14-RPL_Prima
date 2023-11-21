/*
  Warnings:

  - You are about to drop the column `lokasi` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nomorTelepon` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Instruktur` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `location` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_nomorTelepon_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "lokasi",
DROP COLUMN "nomorTelepon",
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- DropTable
DROP TABLE "Instruktur";

-- CreateTable
CREATE TABLE "Instructor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instructor_nik_key" ON "Instructor"("nik");
