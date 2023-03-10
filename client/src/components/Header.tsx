/** @format */

import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function Header(props: any) {
  const {
    onSubmitTextPrompt,
    onSubmitImagePrompt,
    onSelectSlide,
    setTextValue,
    presentation,
  } = props;
  const [textPrompt, setTextPrompt] = useState("");
  const [imagePrompt, setImagePrompt] = useState("");

  const startPresentation = () => {
    document.querySelector(".slide")?.requestFullscreen();
    let slideNumber = 0;
    onkeydown = (e) => {
      if (e.key === "ArrowRight") {
        slideNumber = slideNumber + 1;
        onSelectSlide(slideNumber);
        setTextValue(presentation.slides[slideNumber].text);
      } else if (e.key === "ArrowLeft") {
        slideNumber = slideNumber - 1;
        onSelectSlide(slideNumber);

        setTextValue(presentation.slides[slideNumber].text);
      }
    };
  };

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
          width="200px"
          bg={"white"}
          placeholder="text prompt"
          value={textPrompt}
          onChange={handleTextPromptChange}
        />
      </form>

      <form onSubmit={onImageSubmit}>
        <Input
          name="imagePrompt"
          w={"200px"}
          placeholder="image prompt"
          bg={"white"}
          value={imagePrompt}
          onChange={handleImagePromptChange}
        />
      </form>
      {/* This one is for generating an Image. */}

      <Button
        bg={" #319795;"}
        color="white"
        onClick={startPresentation}
        onPointerDown={startPresentation}
      >
        Present
      </Button>
      {/* Click this to enter presentation mode. */}
    </Flex>
  );
}
