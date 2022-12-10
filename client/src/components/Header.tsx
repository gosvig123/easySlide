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
  // createImage,
  // createText,
} from "./requests";

export default function Header(props: any) {
  const { slide, onSelect, updatePresentationState, presentationState } = props;
  const onEnterHandler = (e: any) => {
    if (e.key === "Enter") {
      const input = e.target.value;

      const updatedSlide = {
        id: slide["id"],
        text: slide["text"].concat(input),
        image: slide["image"],
      };

      onSelect(updatedSlide);

      // console.log("2nd", slide);
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

    createSlide(id);
    const getNewPresentation = await getPresentation(id);
    updatePresentationState(getNewPresentation);
    console.log(getNewPresentation);
    console.log(presentationState);

    console.log(presentationState);

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
