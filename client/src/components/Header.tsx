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
  completeText,
  createImage,
  createText,
} from "../lib/api";

export default function Header(props: any) {
  const { slide, onSelect, updatePresentationState, presentation } = props;

  const { slides } = presentation;

  const [presentationName, setPresentationName] = useState("");

  const onTextSubmit = async (e: any) => {
    // 1. Read from the form
    // 2. Tell the app we want to add that text 
    // 3. Wait for re-render

    if (e.key === "Enter") {
      const updatedPresentation = await getPresentation(presentation.id);
      const input = e.target.value;
      const paragraph = await completeText(input, 40);
      await createText(presentation.id, slide.id, paragraph);

      const updatedSlide = {
        id: slide["id"],
        text: paragraph,
        image: slide["image"],
      };
      onSelect(updatedSlide);
      updatePresentationState(await updatedPresentation);

      return presentation;
    }
  };

  const onImageSubmit = async (e: any) => {
    if (e.key === "Enter") {
      const updatedPresentation = getPresentation(presentation.id);
      const input = e.target.value;
      const aiPic = await generateImage(input, 1, "1024x1024");
      await createImage(presentation.id, slide.id, aiPic);
      const updatedSlide = {
        id: slide["id"],
        text: slide["text"],
        image: aiPic,
      };
      onSelect(updatedSlide);
      updatePresentationState(await updatedPresentation);

      return presentation;
    }
  };


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
    onSelect(slides.length - 1);

    //await createText(presentationState.id, slide.id, input);
    //  const updatedPresentation = await getPresentation(presentationState.id);
    //  updatePresentationState(await updatedPresentation);

    updatePresentationState(await getNewPresentation);
    //console.log(presentationState);

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
        onKeyDown={(e) => onTextSubmit(e)}
      />
      {/* This one is for generating Text. */}

      <Input
        htmlSize={4}
        width="auto"
        placeholder="image prompt"
        onKeyDown={(e) => onImageSubmit(e)}
      />
      {/* This one is for generating an Image. */}

      <Button colorScheme="blue">Present</Button>
      {/* Click this to enter presentation mode. */}
    </Flex>
  );
}
