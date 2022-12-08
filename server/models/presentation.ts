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

  //GET PRESENTATION BY ID
  static async getPresentationById(id: number): Promise<Presentation> {

    const presentation = await prisma.presentation.findUniqueOrThrow({
      where: {
        id: id
      }
    })
    return new Presentation(presentation.id, presentation.name, [])


  }

  //CREATE SLIDE
  static async createSlide(id: number, body: any): Promise<Presentation> {

    const presentation = await prisma.presentation.findUniqueOrThrow({
      where: {
        id: id
      }
    })

    const { id: slideId, } = await prisma.slide.create({
      data: {
        id: body.id,
        image: body.image,
        text: body.text,
        presentation: {
          connect: {
            id: presentation.id
          }
        }
      }
    })

    const slides = await prisma.presentation.findUniqueOrThrow({
      where: {
        id: presentation.id
      },
      include: {
        slides: true
      }
    })

    return new Presentation(presentation.id, presentation.name, slides.slides)
  }



}

export default Presentation
