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
      const token = req.headers.authorization?.split(" ")[1];
      if (token === undefined) {
        throw new Error("Token is undefined");
      }
      JSON.parse(token);
      const email = atob(token?.split(".")[1]);

      // const emailToken = token.split(".")[1];
      const decodedEmail = atob(token);
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (user === null) {
        throw new Error("User is undefined");
      }
      const presentations = await getAllPresentations(user?.id);
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
