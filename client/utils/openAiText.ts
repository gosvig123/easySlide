/** @format */

// this function calls the Text API from Open and returns the queried text
// it takes 3 arguments
// 1: the search query for text
// 2: the number of characters to return
// 3: the API key (only the key value)

const openAiText = async (
  searchQuery: string,
  textLength: number,
  apiKey: string
) => {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/engines/davinci/completions",
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
          max_tokens: textLength,
          temperature: 0.7,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0.6,
        }),
      }
    ).then((response) => response.json());

    return response.choices[0].text;
  } catch (error) {
    console.error(error);
  }
};

export default openAiText;
