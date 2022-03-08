/*
  Warnings:

  - Added the required column `updatedAt` to the `Weight` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FeedingType" AS ENUM ('BREAST', 'BOLLTE');

-- CreateEnum
CREATE TYPE "FeedingSide" AS ENUM ('LEFT', 'RIGHT', 'BOTH');

-- AlterTable
ALTER TABLE "Weight" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Feeding" (
    "id" SERIAL NOT NULL,
    "type" "FeedingType" NOT NULL,
    "side" "FeedingSide",
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3),
    "startWeight" DOUBLE PRECISION,
    "endWeight" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feeding_pkey" PRIMARY KEY ("id")
);
