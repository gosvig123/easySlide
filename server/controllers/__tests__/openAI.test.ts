import { jest, describe, expect, test } from "@jest/globals";
import SlideController from "../slideControler";

import * as openAiFunctions from "../../lib/open-ai-functions";

jest.mock("../../lib/open-ai-functions");

describe("SlideController", () => {
  describe("getOpenAiImage", () => {
    test("returns an image", async () => {
      const req = {
        body: {
          prompt: "test prompt",
          n: 1,
          size: "small",
        },
      };

      const res = {
        json: jest.fn(),
      };

      const image = "test image";

      const getImageFromOpenAi = jest
        .spyOn(openAiFunctions, "getImageFromOpenAi")
        .mockResolvedValue(image);

      // @ts-ignore
      await SlideController.getOpenAiImage(req, res);

      expect(getImageFromOpenAi).toHaveBeenCalledWith(
        req.body.prompt,
        req.body.n,
        req.body.size,
        process.env.API_KEY
      );

      expect(res.json).toHaveBeenCalledWith(image);
    });
  });

  describe("getOpenAiText", () => {
    test("returns text", async () => {
      const req = {
        body: {
          searchQuery: "test search query",
          textLength: 1,
        },
      };

      const res = {
        json: jest.fn(),
      };

      const text = "test text";

      const openAiText = jest
        .spyOn(openAiFunctions, "openAiText")
        .mockResolvedValue(text);

      // @ts-ignore
      await SlideController.getOpenAiText(req, res);

      expect(openAiText).toHaveBeenCalledWith(
        req.body.searchQuery,
        req.body.textLength,
        process.env.API_KEY
      );

      expect(res.json).toHaveBeenCalledWith(text);
    });
  });
});
