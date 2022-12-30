/** @format */

import { Presentation, Slide, User } from "@prisma/client";
import prisma from "../lib/prisma";
import jwt from "jsonwebtoken";
import atob from "atob";

type presentationBody = {
  name: string;
  userid: number;
};

export async function createPresentation(
  body: presentationBody
): Promise<Presentation> {
  const { name, userid } = body;

  const presentation = await prisma.presentation.create({
    data: {
      name: name,
      userid: userid,
    },
  });

  return presentation;
}

export async function getAllPresentations(
  userId: number
): Promise<Presentation[]> {
  const presentation = await prisma.presentation.findMany({
    where: {
      userid: userId,
    },
    include: {
      slides: true,
    },
  });

  console.log(presentation[0]);
  return presentation;
}

export async function getPresentationById(id: number): Promise<Presentation> {
  const presentation = await prisma.presentation.findUnique({
    where: {
      id: id,
    },
  });

  if (presentation === null) {
    throw new Error("Presentation not found");
  }
  return presentation;
}
