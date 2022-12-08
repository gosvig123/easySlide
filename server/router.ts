
import express from 'express';
import PresentationController from './controllers/presentationController';

const router = express.Router();

router.post('/presentations', PresentationController.createPresentation);

router.get('/presentations', PresentationController.getAllPresentations);

router.get('/presentations/:id', PresentationController.getPresentationById);

router.post('/presentations/:id/slides', PresentationController.createSlide);

export default router;
