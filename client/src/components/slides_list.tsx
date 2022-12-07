/** @format */
import { useState } from "react";
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";


export default function SlidesList() {
    // create a slides class

    // create a slide object containing id, title, description, image, and link

    // create use state for slides
  const [slides, setSlides] = useState<any[]>([]);

    // define type of an empty array use state example

  const addSlide = () => {
    setSlides([...slides, 1]);
    console.log(slides);
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
      <Center mt={10} w="130px" flexShrink="0" h="100px" bg="tomato" color="white" borderWidth="1px"
        borderColor="white" borderRadius="12px" mb="10px">
        <PhoneIcon />
      </Center>
      {slides.length > 0 &&
        slides.map((slide, index) => (
          <Box textAlign="center" style={{ flexShrink: '0', marginBottom: "15px", marginTop: "15px", borderStyle: "solid", borderRadius: "12px", position: "relative", borderColor: "white", borderWidth: "1px", width: 130, height: 100, color: "white" }}

            key={index}>


            {slide}

          </Box>
        ))}
      <Center mt="20px" borderRadius="12px" mr="15px" ml="15px" w="150px" h="100" bg="tomato" color="white">
        <Box as="span" fontWeight="bold" fontSize="lg" onClick={addSlide}>
          +
        </Box>
      </Center>
    </Flex>
  );
}
