/** @format */
import dotenv from "dotenv";
import { createUser, getUserByEmail } from "../models/userModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import atob from "atob";

if (process.env.JWT_SECRET === undefined) {
  throw new Error("JWT_SECRET is undefined");
}
dotenv.config();

const userController = {
  async createUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const createdUser = await createUser(email, hashedPassword);
      const secret = process.env.JWT_SECRET;
      if (secret === undefined) {
        throw new Error("JWT_SECRET is undefined");
      }
      const dbemail = createdUser.email;
      const token = await jwt.sign(email, secret);

      res.json(token);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  },

  async loginUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await getUserByEmail(email);
      if (user === null) {
        res.status(404).json({ message: "User not found" });
      }

      if (user === null) {
        throw new Error("Password is undefined");
      }
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        const secret = process.env.JWT_SECRET;
        if (secret === undefined) {
          throw new Error("JWT_SECRET is undefined");
        }
        const token = jwt.sign(email, secret);
        res.json(token);
      } else {
        res.status(401).json({ message: "Password is incorrect" });
      }
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  },

  async authenticateUser(req: Request, res: Response) {
    try {
      const { token } = req.body;

      const secret = process.env.JWT_SECRET;
      if (secret === undefined) {
        throw new Error("JWT_SECRET is undefined");
      }
      const email = token.split(".")[1];
      const decodedEmail = atob(email);

      const user = await getUserByEmail(decodedEmail);
      if (user === null) {
        res.redirect("/");
      }
      if (!jwt.verify(JSON.parse(token), secret)) {
        res.redirect("/");
      }
      if (user === null) {
        throw new Error("User is undefined");
      }
      const basicUser = {
        id: user.id,
        email: user.email,
      };

      res.json(basicUser);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  },
};

export default userController;
