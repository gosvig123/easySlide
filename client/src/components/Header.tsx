/** @format */

import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  createPresentation,
  getPresentation,
  createSlide,
  generateImage,
  createImage,
  createText,
} from "./requests";

export default function Header(props: any) {
  const { slide, onSelect, updatePresentationState, presentationState } = props;

  const { slides } = presentationState;
  const onEnterHandler = async (e: any) => {
    if (e.key === "Enter") {
      const input = e.target.value;
      console.log(slide);
      const aiPic = await generateImage(input, 1, "1024x1024");
      const updatedSlide = {
        id: slide["id"],
        text: slide["text"].concat(input),
        image: aiPic,
      };

      onSelect(updatedSlide);

      return;
    }
  };

  const [presentationName, setPresentationName] = useState("");

  const handChange = (e: any) => {
    e.preventDefault();
    setPresentationName(e.target.value);
    return;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const requestToCreatePresentation = await createPresentation(
      presentationName
    );
    const { id } = requestToCreatePresentation;

    await createSlide(id);
    const getNewPresentation = await getPresentation(id);
    onSelect(slides[slides.length - 1]);
    updatePresentationState(await getNewPresentation);

    return;
  };
  return (
    <Flex color="black" mt={5} gap="25">
      <Center w="100px" bg="green.500">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handChange} value={presentationName} />
          <button type="submit">Submit</button>
        </form>
        <Text>Presentation Name</Text>
      </Center>

      <Input
        htmlSize={4}
        width="auto"
        placeholder="text prompt"
        onKeyDown={(e) => onEnterHandler(e)}
      />
      {/* This one is for generating Text. */}

      <Input
        htmlSize={4}
        width="auto"
        placeholder="image prompt"
        onKeyDown={(e) => onEnterHandler(e)}
      />
      {/* This one is for generating an Image. */}

      <Button colorScheme="blue">Present</Button>
      {/* Click this to enter presentation mode. */}
    </Flex>
  );
}
