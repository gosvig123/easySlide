import { Request, Response } from 'express';
import { presentation } from '../models/presentation'


function createPresentations(req: Request, res: Response) {
  const name = req.body;
  const newPresentation = new Presentation({ name })

  newPresentation.save()
    .then((presentation) => res.json(presentation))
    .catch((err) => res.status(400).json('Error: ' + err));
}

export default createPresentations;