import { Presentation, Slide } from "@prisma/client";
import prisma from "../lib/prisma";

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

  const newPresentation = await prisma.presentation.findUniqueOrThrow({
    where: {
      id: presentation.id,
    },
    include: {
      slides: true,
    },
  });

  return newPresentation;
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

  //   id: number,
  //   slideId: string,
  //   image: string
  // ): Promise<Slide> {
  //   const slide = await prisma.slide.findUniqueOrThrow({
  //     where: {
  //       id: slideId,
  //     },
  //   });
  // const image = body.image ? body.image : "";

  // await prisma.slide.update({
  //   where: {
  //     id: slideId,
  //   },
  //   data: {
  //     image: image,
  //   },
  // });
  const newSlide = await prisma.slide.findUniqueOrThrow({
    where: { id: slide.id },
  });

  return newSlide;
}

export async function createText(
  id: number,
  slideId: string,
  text: string
): Promise<Slide> {
  const slide = await prisma.slide.findUniqueOrThrow({
    where: { id: slideId },
  });
  // const text = body.text ? body.text : "";

  await prisma.slide.update({
    where: {
      id: slideId,
    },
    data: {
      text,
    },
  });
  const newSlide = await prisma.slide.findUniqueOrThrow({
    where: { id: slide.id },
  });

  return newSlide;
}
