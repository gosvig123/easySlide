import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

process.on("SIGKTERM", () => {
  prisma.$disconnect();
});
