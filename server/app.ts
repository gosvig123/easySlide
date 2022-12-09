/** @format */

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./router";
import cors from "cors";
import { Server } from "http";
import { getImageFromOpenAi, openAiText } from "./lib/open-ai-functions";

dotenv.config();

function startServer(): Promise<Server> {
  const PORT = process.env.server_port;

  const openAIkey: string | undefined = process.env.API_KEY;

  if (!openAIkey) {
    throw new Error("No API key found");
  }

  const app: Express = express();
  app.use(express.json());
  app.use(cors());
  app.use(router);

  app.post("/openimage", async (req: Request, res: Response) => {
    console.log(req.body);
    const { prompt, n, size } = req.body;
    const image = await getImageFromOpenAi(prompt, n, size, openAIkey);
    console.log(image);
    res.json(image);
  });

  app.post("/opentext", async (req: Request, res: Response) => {
    console.log(req.body);
    const { searchQuery, textLength } = req.body;
    const text = await openAiText(
      searchQuery,
      textLength,
      openAIkey
    );
    console.log(text);
    res.json(text);
  });

  return new Promise(resolve => {
    const server = app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
      resolve(server)
    })
  })
}

export default startServer