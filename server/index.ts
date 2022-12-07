/** @format */

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getImageFromOpenAi } from "./lib/open-ai-functions";
const router = express.Router();
const PORT = process.env.PORT;

const app: Express = express();
app.use(router);
const port = process.env.PORT;
app.use(express.json());

dotenv.config();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Abhi!");
});

app.post("/openimage", async (req: Request, res: Response) => {
  console.log(req.body);
  const { prompt, n, size } = req.body;
  const image = await getImageFromOpenAi(
    prompt,
    n,
    size,
    "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"
  );
  console.log(image);
  res.json(image);
});

app.listen(8080, () => {
  console.log(`Example app listening on port 8080`);
});

export default app;
