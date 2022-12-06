import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  const presentation = await prisma.presentation.create({
    data: {
      name: 'My first presentation',
    }
  })

  const slide = await prisma.slide.create({
    data: {
      text: 'wednesday is the best day of the week, and you know it',
      image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.boredpanda.com%2Fblog%2Fwp-content%2Fuploads%2F2016%2F10%2Fworlds-most-beautiful-cats-47-57fc93324976e__700.jpg&imgrefurl=https%3A%2F%2Fwww.boredpanda.com%2Fworlds-most-beautiful-cats%2F&tbnid=EnZyl4HpcPqQ8M&vet=12ahUKEwiayI-e_uT7AhULGRoKHd7JD5UQMygBegUIARDiAQ..i&docid=bfjPm36BpNB5MM&w=700&h=700&q=cats%20pretty&ved=2ahUKEwiayI-e_uT7AhULGRoKHd7JD5UQMygBegUIARDiAQ',
      presentationid: presentation.id,
    },
  })

  const slide2 = await prisma.slide.create({
    data: {
      text: 'tuesday is the second best day of the week',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstickerapp.es%2Fpegatinas-shop%2Fpolitica-y-religion%2Ffuck-you&psig=AOvVaw0u0GTGbnCbNATx1oFx3bOU&ust=1670415792368000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCj3fP95PsCFQAAAAAdAAAAABAD',
      presentationid: presentation.id,

    }
  })

  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })

}