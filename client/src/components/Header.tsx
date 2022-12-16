/** @format */

import React, { useState } from "react";
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

interface HeaderProps {
  onSubmitTextPrompt: (textPrompt: string) => Promise<void>;
  onSubmitImagePrompt: (imagePrompt: string) => Promise<void>;
}

export default function Header(props: any) {
  const { onSubmitTextPrompt, onSubmitImagePrompt } = props;

  const [textPrompt, setTextPrompt] = useState("");
  const [imagePrompt, setImagePrompt] = useState("");

  const handleTextPromptChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setTextPrompt(e.target.value);
  };
  const handleImagePromptChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setImagePrompt(e.target.value);
  };

  const onTextSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    // 1. Read from the form
    // 2. Tell the app we want to add that text
    // 3. Wait for re-render
    // 4. Clear the input
    e.preventDefault();

    try {
      await onSubmitTextPrompt(textPrompt);
      setTextPrompt("");
    } catch (e) {}
  };

  const onImageSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();

    try {
      await onSubmitImagePrompt(imagePrompt);
      setImagePrompt("");
    } catch (e) {}
  };

  return (
    <Flex color="black" mt={5} gap="25">
      <form onSubmit={onTextSubmit}>
        <Input
          name="textPrompt"
          htmlSize={4}
          width="auto"
          placeholder="text prompt"
          value={textPrompt}
          onChange={handleTextPromptChange}
        />
      </form>
      {/* This one is for generating Text. */}
      <Spacer />
      <Spacer />
      <Spacer />

      <form onSubmit={onImageSubmit}>
        <Input
          name="imagePrompt"
          htmlSize={4}
          width="auto"
          placeholder="image prompt"
          value={imagePrompt}
          onChange={handleImagePromptChange}
        />
      </form>
      {/* This one is for generating an Image. */}

      <Button colorScheme="blue">Present</Button>
      {/* Click this to enter presentation mode. */}
    </Flex>
  );
}
