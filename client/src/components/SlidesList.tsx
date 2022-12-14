/** @format */
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

export default function SlidesList(props: any) {
  const { onSelect, presentation, onCreateSlide } = props;

  const { slides } = presentation;

  // const handleCreatePresentation = async (e: any) => {
  //   e.preventDefault();
  //   const finalName = presentationName || "Untitled Presentation";
  //   const newPresentation = await api.createPresentation(finalName);
  //   setPresentation(newPresentation);
  // };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const finalName = presentationName || "Untitled Presentation";
    const newPresentation = await createPresentation(finalName);
    setPresentation({
      newPresentation,
    });
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
