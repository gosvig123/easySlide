/** @format */
import prisma from "../lib/prisma";

export async function createUser(email: string, password: string) {
  const newUser = await prisma.user.create({
    data: {
      email,
      password,
    },
  });

  return newUser;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
}
