import dotenv from "dotenv";
import { Request, Response } from "express";
import { getImageFromOpenAi, openAiText } from "../lib/open-ai-functions";
dotenv.config();

const openAIkey: string | undefined = process.env.API_KEY;

if (!openAIkey) {
  throw new Error("No API key found");
}

const SlideController = {
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
};

export default SlideController;
