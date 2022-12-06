/*
  Warnings:

  - The primary key for the `Slide` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `slideText` on the `Slide` table. All the data in the column will be lost.
  - You are about to drop the column `slideid` on the `Slide` table. All the data in the column will be lost.
  - You are about to drop the column `slideimage` on the `Slide` table. All the data in the column will be lost.
  - The required column `id` was added to the `Slide` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `image` to the `Slide` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Slide` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Slide" DROP CONSTRAINT "Slide_pkey",
DROP COLUMN "slideText",
DROP COLUMN "slideid",
DROP COLUMN "slideimage",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "text" TEXT NOT NULL,
ADD CONSTRAINT "Slide_pkey" PRIMARY KEY ("id");
