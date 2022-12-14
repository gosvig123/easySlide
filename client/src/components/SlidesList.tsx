/** @format */
import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { createPresentation, getPresentation, createSlide } from "../lib/api";

export default function SlidesList(props: any) {
  const { onSelect, presentation, updatePresentationState, onCreateSlide } =
    props;

  const [presentationName, setPresentationName] = useState("");
  const { slides } = presentation;

  const addSlide = async () => {
    onCreateSlide();
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

    updatePresentationState(await getNewPresentation);

    return;
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handChange}
            value={presentationName}
            placeholder="Presentation Name"
          />
          <button type="submit">Submit</button>
        </form>
      </Flex>
      <Center
        mt={10}
        w="130px"
        flexShrink="0"
        h="100px"
        bg="#F5F5F5"
        color="white"
        borderWidth="1px"
        borderColor="white"
        borderRadius="12px"
        mb="10px"
      >
        <PhoneIcon />
      </Center>
      {slides.length > 0 &&
        Array.isArray(slides) &&
        slides.map((slide, index) => (
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
            onClick={() => onSelect(index)}
          >
            {slide["text"]}
          </Box>
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
          onClick={addSlide}
        >
          + Add Slide
        </Box>
      </Center>
    </Flex>
  );
}
