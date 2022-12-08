import { Request, Response } from 'express';
import Presentation from '../models/presentation';


//create a controller that returns a presentation
type presentation = {
  id: number,
  name: string,
  slides: []
}

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
  },


  async getAllPresentations(req: Request, res: Response) {

    // if presentation exists, return it
    // else return error

    if (req.body) {
      const presentations = await Presentation.getAllPresentations()
      return res.status(200).json(presentations)
    } else {
      return res.status(400).send("error no body")
    }
  },

  async getPresentationById(req: Request, res: Response) {
    const id = parseInt(req.params.id)

    //parse id from string to number


    console.log(id, "id")

    if (id) {

      const presentation: presentation | null = await Presentation.getPresentationById(id)
      return res.status(200).json(presentation)
    } else {
      return res.status(400).send("error no body")
    }
  }

}



export default PresentationController

