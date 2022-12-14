import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response, text } from "express";
import app from "../app";
import { getImageFromOpenAi, openAiText } from "../lib/open-ai-functions";
import { createSlide, createImage, createText } from "../models/slidesModel";
import router from "../router";
import PresentationController from "./presentationController";

dotenv.config();

const openAIkey: string | undefined = process.env.API_KEY;

if (!openAIkey) {
  throw new Error("No API key found");
}

const SlideController = {
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
      console.log(slideId, id);

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

  async getOpenAiImage(req: Request, res: Response) {
    console.log(req.body);
    const { prompt, n, size } = req.body;
    const image = await getImageFromOpenAi(prompt, n, size, openAIkey);
    console.log(image);
    res.json(image);
  },

  async getOpenAiText(req: Request, res: Response) {
    console.log(req.body);
    const { searchQuery, textLength } = req.body;
    const text = await openAiText(searchQuery, textLength, openAIkey);
    console.log(text);
    res.json(text);
  },

  async getOpenAiImageAndSave(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const slideId = req.params.slideId;
    const { prompt, n, size } = req.body;
    const image = await getImageFromOpenAi(prompt, n, size, openAIkey);

    const imageToSave = await createImage(id, slideId, image);
    res.json(imageToSave);
  },

  async getOpenAiTextAndSave(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const slideId = req.params.slideId;
    const { searchQuery, textLength } = req.body;
    const text = await openAiText(searchQuery, textLength, openAIkey);
    console.log(text);
    const textToSave = await createText(id, slideId, text);
    res.json(textToSave);
  },
};

export default SlideController;
