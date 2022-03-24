/*
  Warnings:

  - The values [BOTH] on the enum `FeedingSide` will be removed. If these variants are still used in the database, this will fail.
  - The values [BOLLTE] on the enum `FeedingType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `startWeight` on the `Feeding` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `endWeight` on the `Feeding` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to drop the column `updatedAt` on the `Weight` table. All the data in the column will be lost.
  - You are about to alter the column `value` on the `Weight` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "FeedingSide_new" AS ENUM ('LEFT', 'RIGHT');
ALTER TABLE "Feeding" ALTER COLUMN "side" TYPE "FeedingSide_new" USING ("side"::text::"FeedingSide_new");
ALTER TYPE "FeedingSide" RENAME TO "FeedingSide_old";
ALTER TYPE "FeedingSide_new" RENAME TO "FeedingSide";
DROP TYPE "FeedingSide_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "FeedingType_new" AS ENUM ('BREAST', 'BOTTLE');
ALTER TABLE "Feeding" ALTER COLUMN "type" TYPE "FeedingType_new" USING ("type"::text::"FeedingType_new");
ALTER TYPE "FeedingType" RENAME TO "FeedingType_old";
ALTER TYPE "FeedingType_new" RENAME TO "FeedingType";
DROP TYPE "FeedingType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Feeding" ADD COLUMN     "pauses" INTEGER,
ALTER COLUMN "startWeight" SET DATA TYPE INTEGER,
ALTER COLUMN "endWeight" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Weight" DROP COLUMN "updatedAt",
ALTER COLUMN "value" SET DATA TYPE INTEGER;

-- CreateTable
CREATE TABLE "Baby" (
    "name" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Baby_pkey" PRIMARY KEY ("name","birthDate")
);

-- CreateTable
CREATE TABLE "DiaperChange" (
    "id" SERIAL NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3),
    "pee" BOOLEAN NOT NULL,
    "poop" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiaperChange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Temperature" (
    "id" SERIAL NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Temperature_pkey" PRIMARY KEY ("id")
);
