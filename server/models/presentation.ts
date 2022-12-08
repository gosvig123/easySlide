import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type presentationBody = {
  name: string
}

class Presentation {
  constructor(
    public id: number,
    public name: string,
    public slides: []
  ) { }

  // CREATE PRESENTATION
  static async createPresentation(body: presentationBody): Promise<Presentation> {

    const { id, name } = await prisma.presentation.create({
      data: {
        name: body.name
      },
    })

    return new Presentation(id, name, [])
  }

  //GET ALL PRESENTATIONS
  static async getAllPresentations(): Promise<Presentation[]> {

    const presentations = await prisma.presentation.findMany()

    //return array of presentations

    return presentations.map(presentation => {
      return new Presentation(presentation.id, presentation.name, [])
    })
  }


}

export default Presentation
