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

interface HeaderProps {
  onSubmitTextPrompt: (textPrompt: string) => Promise<void>;
  onSubmitImagePrompt: (imagePrompt: string) => Promise<void>;
}

export default function Header(props: any) {
  const { onSubmitTextPrompt, onSubmitImagePrompt } = props;

  const onTextSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    // 1. Read from the form
    // 2. Tell the app we want to add that text
    // 3. Wait for re-render
    // 4. Clear the input
    e.preventDefault();
    const target = e.target as typeof e.target & {
      textPrompt: HTMLInputElement;
    };

    const textPrompt = target.textPrompt.value;

    try {
      await onSubmitTextPrompt(textPrompt);
      // @ts-ignore
      e.target.reset();
    } catch (e) {}
  };

  const onImageSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      imagePrompt: HTMLInputElement;
    };

    const imagePrompt = target.imagePrompt.value;

    try {
      await onSubmitImagePrompt(imagePrompt);
      // @ts-ignore
      e.target.reset();
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
        />
      </form>
      {/* This one is for generating an Image. */}

      <Button colorScheme="blue">Present</Button>
      {/* Click this to enter presentation mode. */}
    </Flex>
  );
}
