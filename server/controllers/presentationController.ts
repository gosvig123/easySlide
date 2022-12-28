/** @format */
import { Presentation, User } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../lib/prisma";

import jwt from "jsonwebtoken";
import atob from "atob";

import {
  createPresentation,
  getAllPresentations,
  getPresentationById,
} from "../models/presentationModel";
import { createImage, createSlide, createText } from "../models/slidesModel";
import { type } from "os";

const PresentationController: any = {
  async createPresentation(req: Request, res: Response) {
    try {
      const token = req.body.userId;
      const decodedEmail = atob(token.split(".")[1]);
      const secret = process.env.JWT_SECRET;
      if (secret !== undefined && jwt.verify(JSON.parse(token), secret)) {
        const activeUser = await prisma.user.findUnique({
          where: {
            email: decodedEmail,
          },
        });
        if (typeof activeUser?.id === "number" && activeUser!) {
          const body = {
            name: req.body.name,
            userid: activeUser?.id,
          };

          const presentation = await createPresentation(body);
          return res.status(201).json(presentation);
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send("error");
    }
  },

  async getAllPresentations(req: Request, res: Response) {
    try {
      const presentations = await getAllPresentations();
      return res.status(200).json(presentations);
    } catch (error) {
      console.log(error);
      return res.status(500).send("error");
    }
  },

  async getPresentationById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      const presentation: Presentation | null = await getPresentationById(id);
      return res.status(200).json(presentation);
    } catch (error) {
      console.log(error);
      return res.status(500).send("error");
    }
  },
};

export default PresentationController;
