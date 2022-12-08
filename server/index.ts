import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './router';
import cors from 'cors';


import { getImageFromOpenAi, openAiText } from "./lib/open-ai-functions";


dotenv.config();
const openAIkey: string | undefined = process.env.API_KEY

if (!openAIkey) {
  throw new Error("No API key found");
}


const app: Express = express();
const PORT = process.env.server_port;
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
    process.env.API_KEY
  );
  console.log(text);
  res.json(text);
});

app.listen(8080 || process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);





  app.listen(8080 || PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });

  export default app;
