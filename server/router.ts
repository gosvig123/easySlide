import express from "express";
import PresentationController from "./controllers/presentationController";
import SlideController from "./controllers/slideControler";

const router = express.Router();

router.post("/presentations", PresentationController.createPresentation);

router.get("/presentations", PresentationController.getAllPresentations);

router.get("/presentations/:id", PresentationController.getPresentationById);

router.post("/presentations/:id/slides", SlideController.createSlide);

router.post("/openimage/:id/slides/:slideId", SlideController.updateImage);

router.post("/opentext/:id/slides/:slideId", SlideController.updateText);

export default router;
