/*
  Warnings:

  - Added the required column `userid` to the `Presentation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Presentation" ADD COLUMN     "userid" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Presentation" ADD CONSTRAINT "Presentation_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
