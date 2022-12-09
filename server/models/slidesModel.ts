import { PrismaClient, Slide, Presentation } from "@prisma/client";
const prisma = new PrismaClient();

export async function createSlide(
  id: number,
  body: { text?: string; image?: string }
): Promise<Presentation> {
  const presentation = await prisma.presentation.findUniqueOrThrow({
    where: { id },
  });

  const image = body.image ? body.image : "";
  const text = body.text ? body.text : "";

  await prisma.slide.create({
    data: {
      image,
      text,
      presentation: {
        connect: {
          id: presentation.id,
        },
      },
    },
  });

  await prisma.presentation.findUniqueOrThrow({
    where: {
      id: presentation.id,
    },
    include: {
      slides: true,
    },
  });

  return presentation;
}

export async function createImage(
  id: number,
  slideId: string,
  body: { image: string }
): Promise<Slide> {
  const slide = await prisma.slide.findUniqueOrThrow({
    where: { id: slideId },
  });

  return slide;
}
