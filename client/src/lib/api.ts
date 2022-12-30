/** @format */

const BASE_URL = "http://localhost:8080";

export const getPresentation: any = async (id: string) => {
  const stringId = id.toString();
  const updatedPresentation = await fetch(
    `${BASE_URL}/presentations/${stringId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

  return updatedPresentation;
};

export const getAllPresentations: any = async () => {
  const rawToken = localStorage.getItem("token");
  const url = `${BASE_URL}/allpresentations`;
  if (rawToken === null) {
    throw new Error("No token found");
  }

  const allPresentations: any = await fetch(`${url}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${rawToken}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return allPresentations;
};

export const auth = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/";
  }
  const authUser = await fetch("http://localhost:8080/authenticateUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token,
    }),
  }).then((res) => res.json());

  if (!authUser) {
    window.location.href = "/";
  }
};

export const createPresentation: any = async (
  presentationName: string,
  userId: string
) => {
  console.log(typeof userId);
  const newPresentation = await fetch(`${BASE_URL}/presentations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: presentationName,
      userId: userId,
    }),
  }).then((data) => data.json());

  return newPresentation;
};

export const createSlide: any = async (presentationId: string) => {
  const newSlide = await fetch(
    `${BASE_URL}/presentations/${presentationId}/slides`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

  return newSlide;
};

export const createImage: any = async (
  presentationId: string,
  slideId: string,
  image: string
) => {
  const newImage: any = await fetch(
    `${BASE_URL}/presentations/${presentationId}/slides/${slideId}/images`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image }),
    }
  ).then((res) => res.json());

  return newImage;
};

export const createText: any = async (
  presentationId: string,
  slideId: string,
  text: string
) => {
  const newText = await fetch(
    `${BASE_URL}/presentations/${presentationId}/slides/${slideId}/text`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    }
  ).then((res) => res.json());

  return newText;
};

export const generateImage = async (
  prompt: string,
  n: number,
  size: string,
  presentationId: number,
  slideId: string
) => {
  const newImage = await fetch(
    `${BASE_URL}/openimage/${presentationId}/slides/${slideId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt,
        n,
        size,
      }),
    }
  ).then((res) => res.json());

  return newImage;
};

export const completeText: any = async (
  searchQuery: string,
  textLength: number,
  presentationId: number,
  slideId: string
) => {
  const newText = await fetch(
    `${BASE_URL}/opentext/${presentationId}/slides/${slideId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        searchQuery,
        textLength,
      }),
    }
  ).then((res) => res.json());

  return newText;
};
