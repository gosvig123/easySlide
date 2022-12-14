import express from "express";
import PresentationController from "./controllers/presentationController";
import SlideController from "./controllers/slideControler";

const router = express.Router();

router.post("/presentations", PresentationController.createPresentation);

router.get("/presentations", PresentationController.getAllPresentations);

router.get("/presentations/:id", PresentationController.getPresentationById);

router.post("/presentations/:id/slides", SlideController.createSlide);

router.post(
  "/presentations/:id/slides/:slideId/images",
  SlideController.createImage
);

router.post(
  "/presentations/:id/slides/:slideId/text",
  SlideController.createText
);

router.post("/openimage", SlideController.getOpenAiImage);

router.post("/opentext", SlideController.getOpenAiText);

router.post(
  "/openimage/:id/slides/:slideId/images",
  SlideController.getOpenAiImageAndSave
);

router.post(
  "/opentext/:id/slides/:slideId/text",
  SlideController.getOpenAiTextAndSave
);

export default router;
