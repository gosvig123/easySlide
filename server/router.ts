
import express from 'express';
import PresentationController from './controllers/presentationController';

const router = express.Router();

router.post('/presentations', PresentationController.createPresentation);

router.get('/presentations', PresentationController.getAllPresentations);

export default router;
