/** @format */
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import * as api from "../lib/api";

export default function SlidesList(props: any) {
  const {
    setSelectedSlide,
    slides,
    createPresentation,
    presentation,
    setPresentation,
  } = props;
  type Slide = {
    id: number;
    image: string;
    text: string;
  };

  const { slides } = presentation;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const finalName = presentationName || "Untitled Presentation";
    await createPresentation(finalName);
  };

  const handleCreateSlide = async () => {
    let result = await api.getPresentation(presentation.id);
    await result.slides.push({
      id: Math.max(slides.length, 0),
      image: "",
      text: "",
    });
    setPresentation(result);
  };
  return (
    <Flex
      display="flex"
      flexFlow="column"
      position="absolute"
      flexBasis="start"
      overflow="scroll"
      bg="red"
      w="250"
      h="100vh"
      align={"center"}
    >
      <Center
        mt={10}
        w="130px"
        flexShrink="0"
        h="100px"
        bg="tomato"
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
        bg="tomato"
        color="white"
      >
        <Box as="span" fontWeight="bold" fontSize="lg" onClick={addSlide}>
          +
        </Box>
      </Center>
    </Flex>
  );
}
