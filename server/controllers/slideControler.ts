import dotenv from "dotenv";
import { Request, Response } from "express";
import * as OpenAI from "../lib/open-ai-functions";
import * as SlideModel from "../models/slidesModel";

dotenv.config();

const openAIkey: string | undefined = process.env.API_KEY;

if (!openAIkey) {
  throw new Error("No API key found");
}

const SlideController = {
  async createSlide(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      const slide = await SlideModel.createSlide(id, req.body);
      return res.status(201).json(slide);
    } catch (error) {
      console.log(error);
      return res.status(500).send("error");
    }
  },

  async getOpenAiImageAndSave(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const slideId = req.params.slideId;
      const { prompt, n, size } = req.body;
      const image = await OpenAI.getImageFromOpenAi(prompt, n, size, openAIkey);

      const imageToSave = await SlideModel.createImage(id, slideId, image);
      res.status(201).json(imageToSave);
    } catch {
      res.status(500).send("error");
    }
  },

  async getOpenAiTextAndSave(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const slideId = req.params.slideId;
      const { searchQuery, textLength } = req.body;
      const text = await OpenAI.openAiText(searchQuery, textLength, openAIkey);
      console.log(text);
      const textToSave = await SlideModel.createText(id, slideId, text);
      res.status(201).json(textToSave);
    } catch {
      res.status(500).send("error");
    }
  },

  async updateOpenImage(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const slideId = req.params.slideId;
      const { prompt, n, size } = req.body;
      const image = await OpenAI.getImageFromOpenAi(prompt, n, size, openAIkey);

      const imageToSave = await SlideModel.createImage(id, slideId, image);
      res.status(201).json(imageToSave);
    } catch {
      res.status(500).send("error");
    }
  },

  async updateOpenText(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const slideId = req.params.slideId;
      const { searchQuery, textLength } = req.body;
      const text = await OpenAI.openAiText(searchQuery, textLength, openAIkey);
      console.log(text);
      const textToSave = await SlideModel.createText(id, slideId, text);
      res.status(201).json(textToSave);
    } catch {
      res.status(500).send("error");
    }
  },
};

export default SlideController;
