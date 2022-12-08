import { create } from 'domain';
import { Request, Response } from 'express';
import Presentation from '../models/presentation';


//create a controller that returns a presentation

const PresentationController = {

  async createPresentation(req: Request, res: Response) {
    console.log(req.body, "req.body")
    const body = req.body

    if (body) {
      const presentation = await Presentation.createPresentation(body)
      return res.status(201).json(presentation)
    } else {
      return res.status(400).send("error no body")
    }
  }
}


export default PresentationController

