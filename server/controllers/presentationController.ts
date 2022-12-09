import { Presentation } from '@prisma/client';
import { Request, Response } from 'express';
import { createPresentation, getAllPresentations, getPresentationById } from '../models/presentationModel';
import { createSlide } from '../models/slidesModel';



const PresentationController = {
  async createPresentation(req: Request, res: Response) {
    console.log(req.body, "req.body");
    const body = req.body;

    if (body) {
      const presentation = await createPresentation(body)
      return res.status(201).json(presentation)
    } else {
      return res.status(400).send("error no body");
    }
  },

  async getAllPresentations(req: Request, res: Response) {
    // if presentation exists, return it
    // else return error

    if (req.body) {
      const presentations = await getAllPresentations()
      return res.status(200).json(presentations)
    } else {
      return res.status(400).send("error no body");
    }
  },

  async getPresentationById(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    if (id) {

      const presentation: Presentation | null = await getPresentationById(id)
      return res.status(200).json(presentation)
    } else {
      return res.status(400).send("error no body");
    }
  },
};

  async createSlide(req: Request, res: Response) {
    const id = parseInt(req.params.id)

    if (id) {
      const slide = await createSlide(id, req.body)
      return res.status(201).json(slide)
    } else {
      return res.status(400).send("error no id")
    }

  }
}

export default PresentationController

