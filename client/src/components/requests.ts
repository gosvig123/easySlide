/** @format */

export const getPresentation: any = async (id: string) => {
  const updatedPresentation = await fetch(
    `http://localhost:8080/presentations/${id}`
  ).then((res) => res.json());

  return updatedPresentation;
};

export const createPresentation: any = async (presentationName: string) => {
  const newPresentation = await fetch("http://localhost:8080/presentations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: presentationName,
    }),
  }).then((data) => data.json());

  return newPresentation;
};

export const createSlide: any = async (presentationId: string) => {
  const newSlide = await fetch(
    `http://localhost:8080/presentations/${presentationId}/slides`,
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
    `http://localhost:8080/presentations/${presentationId}/slides/${slideId}/images`,
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
    `http://localhost:8080/presentations/${presentationId}/slides/${slideId}/text`,
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

export const generateImage: any = async (
  prompt: string,
  n: number,
  size: string
) => {
  const newImage = await fetch(`http://localhost:8080/openimage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt,
      n,
      size,
    }),
  }).then((res) => res.json());

  return newImage;
};

export const completeText: any = async (
  searchQuery: string,
  textLength: number
) => {
  const newText = await fetch(`http://localhost:8080/opentext`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      searchQuery,
      textLength,
    }),
  }).then((res) => res.json());

  return newText;
};
