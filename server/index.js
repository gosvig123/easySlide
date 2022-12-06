import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.server_port || 8080;

app.get("/", (req, res) => {
  res.send("Hello Abhi!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
