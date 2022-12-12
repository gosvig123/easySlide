import { Presentation } from "@prisma/client";
import { Request, Response } from "express";
import {
  createPresentation,
  getAllPresentations,
  getPresentationById,
} from "../models/presentationModel";
import { createImage, createSlide, createText } from "../models/slidesModel";

const PresentationController = {
  async createPresentation(req: Request, res: Response) {
    try {
      const body = req.body;

      const presentation = await createPresentation(body);
      return res.status(201).json(presentation);
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

  async createSlide(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      const slide = await createSlide(id, req.body);
      return res.status(201).json(slide);
    } catch (error) {
      console.log(error);
      return res.status(500).send("error");
    }
  },

  async createImage(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const slideId = req.params.slideId;

      const image = await createImage(id, slideId, req.body);
      return res.status(201).json(image);
    } catch (error) {
      console.log(error);
      return res.status(500).send("error");
    }
  },

  async createText(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const slideId = req.params.slideId;

      const text = await createText(id, slideId, req.body);
      return res.status(201).json(text);
    } catch (error) {
      console.log(error);
      return res.status(500).send("error");
    }
  },
};

export default PresentationController;
