/** @format */
import fetch from "node-fetch";

// it takes 3 arguments
// 1: the search query for text
// 2: the number of characters to return
// 3: the API key (only the key value)

export const openAiText = async (
  searchQuery: string,
  textLength: number,
  apiKey: string
) => {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          organization: "Qf25exKC4RF5oBGT5JyaHIw2",
        },
        body: JSON.stringify({
          prompt: searchQuery,
          max_tokens: textLength,
          temperature: 0.7,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0.6,
        }),
      }
    ).then((response: any) => response.json());

    return response.choices[0].text;
  } catch (error) {
    console.error(error);
  }
};

// this function calls the Open Ai Image API and returns the image URL
// it takes 4 arguments
// 1: the search query for an image
// 2: the number of images to return
// 3: the size of the image
// 4: the API key (only the key value)

export const getImageFromOpenAi = async (
  searchQuery: string,
  numberOfImages: number,
  sizeOfImage: string,
  apiKey: string
): Promise<any> => {
  try {
    const response: any = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          organization: "Qf25exKC4RF5oBGT5JyaHIw2",
        },
        body: JSON.stringify({
          prompt: searchQuery,
          n: numberOfImages,
          size: sizeOfImage,
        }),
      }
    ).then((response: any) => response.json());
    return response.data[0].url;
  } catch (error) {
    console.error(error);
  }
};
