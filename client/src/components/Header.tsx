/** @format */

import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

import {
  //createPresentation,
  getPresentation,
  //createSlide,
  generateImage,
  completeText,
  createImage,
  createText,
} from "../lib/api";

export default function Header(props: any) {
  const { slide, onSelect, updatePresentationState, presentation } = props;

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
      const input = e.target.value;
      const aiPic = await generateImage(input, 1, "1024x1024");
      await createImage(presentation.id, slide.id, aiPic);

      return;
    }
  };

  return (
    <Flex color="black" mt={5} gap="25">
      <Input
        htmlSize={4}
        width="auto"
        placeholder="text prompt"
        onKeyDown={(e) => onTextSubmit(e)}
      />
      {/* This one is for generating Text. */}
      <Spacer />
      <Spacer />
      <Spacer />

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
