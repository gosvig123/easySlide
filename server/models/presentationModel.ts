import { Presentation } from "@prisma/client";
import prisma from "../lib/prisma";

type presentationBody = {
  name: string;
};

export async function createPresentation(
  body: presentationBody
): Promise<Presentation> {
  return await prisma.presentation.create({
    data: {
      name: body.name,
    },
  });
}

export async function getAllPresentations(): Promise<Presentation[]> {
  return await prisma.presentation.findMany();
}

export async function getPresentationById(id: number): Promise<Presentation> {
  return await prisma.presentation.findUniqueOrThrow({
    where: { id },
    include: {
      slides: true,
    },
  });
}