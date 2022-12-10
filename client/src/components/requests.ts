/** @format */

export const getPresentation = async (id: string) => {
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

export const createSlide = async (presentationId: string) => {
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

export const createImage = async (
  presentationId: string,
  slideId: string,
  image: string
) => {
  const newImage = await fetch(
    `http://localhost:8080/presentations/${presentationId}/slides/${slideId}/images`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(image),
    }
  ).then((res) => res.json());

  return newImage;
};

export const createText = async (
  presentationId: string,
  slideId: string,
  text: string
) => {
  const newText = await fetch(
    `http://localhost:8080/presentations/${presentationId}/slides/${slideId}/texts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(text),
    }
  ).then((res) => res.json());

  return newText;
};
