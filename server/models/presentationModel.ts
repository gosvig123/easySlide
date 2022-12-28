/** @format */

import { Presentation } from "@prisma/client";
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
  const userid = body.userid;

  const presentation = await prisma.presentation.create({
    data: {
      name: body.name,
      userid: body.userid,
    },
  });

  return presentation;
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
