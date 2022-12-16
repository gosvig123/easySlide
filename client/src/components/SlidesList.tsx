/** @format */
import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import * as api from "../lib/api";
//import { createPresentation, getPresentation, createSlide } from "../lib/api";

export default function SlidesList(props: any) {
  const {
    setSelectedSlide,
    createPresentation,
    presentation,
    setPresentation,
  } = props;
  type Slide = {
    id: number;
    image: string;
    text: string;
  };

  const [presentationName, setPresentationName] = React.useState("");

  const handChange = (e: any) => {
    setPresentationName(e.target.value);
    return;
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createPresentation(presentationName);
  };

  const handleCreateSlide = async () => {
    await api.createSlide(presentation.id);
    const result = await api.getPresentation(presentation.id);
    setPresentation(result);
  };
  return (
    <Flex
      display="flex"
      flexFlow="column"
      position="absolute"
      flexBasis="start"
      overflow="scroll"
      bg="white"
      w="280px"
      h="100vh"
      align={"center"}
    >
      <Text fontSize="24" as="b">
        Smart Slides
      </Text>
      <Flex bg="grey" flexFlow="column">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            onChange={handChange}
            value={presentationName}
            placeholder="Presentation Name"
          />
          <button type="submit">Submit</button>
        </form>
      </Flex>
      {Array.isArray(presentation?.slides) &&
        presentation?.slides.map((slide: Slide, index: number) => (
          <Box
            textAlign="center"
            backgroundImage={slide.image}
            style={{
              flexShrink: "0",
              marginBottom: "15px",
              marginTop: "15px",
              borderStyle: "solid",
              borderRadius: "12px",
              position: "relative",
              borderColor: "white",
              borderWidth: "1px",
              width: 130,
              height: 100,
              color: "white",
              overflow: "scroll",

              backgroundSize: "cover",
            }}
            key={index}
            onClick={setSelectedSlide(index)}
          />
        ))}
      <Center
        mt="20px"
        borderRadius="12px"
        mr="15px"
        ml="15px"
        w="150px"
        h="100"
        bg="#F5F5F5"
        color="white"
      >
        <Box
          as="span"
          color="#2D3748"
          fontWeight="bold"
          fontSize="lg"
          onClick={() => handleCreateSlide()}
        >
          +
        </Box>
      </Center>
    </Flex>
  );
}
