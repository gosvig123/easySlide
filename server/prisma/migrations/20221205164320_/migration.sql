-- CreateTable
CREATE TABLE "Presentation" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Presentation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slide" (
    "slideid" SERIAL NOT NULL,
    "slideText" TEXT NOT NULL,
    "slideimage" TEXT NOT NULL,
    "presentationid" INTEGER NOT NULL,

    CONSTRAINT "Slide_pkey" PRIMARY KEY ("slideid")
);

-- AddForeignKey
ALTER TABLE "Slide" ADD CONSTRAINT "Slide_presentationid_fkey" FOREIGN KEY ("presentationid") REFERENCES "Presentation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
