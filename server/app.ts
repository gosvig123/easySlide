import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./router";
import cors from "cors";
import { Server } from "http";

dotenv.config();

function startServer(): Promise<Server> {
  const PORT = process.env.SERVER_PORT;

  if (!PORT) {
    throw new Error("No API key found");
  }

  const app: Express = express();
  app.use(express.json());
  app.use(cors());
  app.use(router);

  return new Promise((resolve) => {
    const server = app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
      resolve(server);
    });
  });
}

export default startServer;
