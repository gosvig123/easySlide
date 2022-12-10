import express from "express";
import PresentationController from "./controllers/presentationController";

const router = express.Router();

router.post("/presentations", PresentationController.createPresentation);

router.get("/presentations", PresentationController.getAllPresentations);

router.get("/presentations/:id", PresentationController.getPresentationById);

router.post("/presentations/:id/slides", PresentationController.createSlide);

router.post(
  "/presentations/:id/slides/:slideId/images",
  PresentationController.createImage
);

router.post(
  "presentations/:id/slides/:slideId/text",
  PresentationController.createText
);

export default router;
