import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const PORT = process.env.PORT
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Abhi!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
