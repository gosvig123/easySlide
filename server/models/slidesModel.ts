import { Presentation, Slide } from "@prisma/client";
import prisma from "../lib/prisma";

export async function createSlide(
  id: number,
  body: { text?: string; image?: string }
): Promise<Presentation> {
  const image = body.image ? body.image : "";
  const text = body.text ? body.text : "";

  await prisma.slide.create({
    data: {
      image: image,
      text: text,
      presentation: {
        connect: {
          id,
        },
      },
    },
  });

  const updatedSlides = await prisma.presentation.findMany({
    where: {
      id,
    },
    include: {
      slides: true,
    },
  });

  return updatedSlides[0];
}

export async function createImage(
  id: number,
  slideId: string,
  image: string
): Promise<Slide> {
  const slide = await prisma.slide.update({
    where: {
      id: slideId,
    },
    data: {
      image,
    },
  });

  return slide;
}

export async function createText(
  id: number,
  slideId: string,
  text: string
): Promise<Slide> {
  const slide = await prisma.slide.update({
    where: {
      id: slideId,
    },
    data: {
      text,
    },
  });

  return slide;
}
