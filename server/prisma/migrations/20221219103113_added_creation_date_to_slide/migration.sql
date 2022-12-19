/*
  Warnings:

  - Made the column `image` on table `Slide` required. This step will fail if there are existing NULL values in that column.
  - Made the column `text` on table `Slide` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Slide" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "text" SET NOT NULL;
