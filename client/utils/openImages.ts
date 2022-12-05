/** @format */

// this function calls the Open Ai Image API and returns the image URL
// it takes 4 arguments
// 1: the search query for an image
// 2: the number of images to return
// 3: the size of the image
// 4: the API key (only the key value)

const getImageFromOpenAi = async (
  searchQuery: string,
  numberOfImages: number,
  sizeOfImage: string,
  apiKey: string
) => {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        mode: "cors",
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
    ).then((response) => response.json());
    return response.data[0].url as string;
  } catch (error) {
    error.log(error);
  }
};

export default getImageFromOpenAi;
