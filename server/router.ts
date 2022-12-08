
import express, { Request, response, Response } from 'express';
import { stringify } from 'querystring';
import { brotliDecompressSync } from 'zlib';
import PresentationController from './controllers/presentationController';





const router = express.Router();



// create a presentation post request]

router.post('/presentations', PresentationController.createPresentation);





export default router;
