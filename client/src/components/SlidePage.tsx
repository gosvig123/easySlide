/** @format */

import { Center, Container, Text } from "@chakra-ui/react";
import React from "react";

export default function Page(props: any) {
  const { slide } = props;
  const { text } = slide;
  return (
    <Container
      flex={1}
      ml={140}
      display="flex"
      mt={2}
      minW="80vw"
      maxW="92vw"
      minH="70vh"
      maxH="91vh"
      border="1px"
      backgroundImage={slide.image}
      backgroundSize="cover"
      bgRepeat="no-repeat"
      backgroundPosition="center"
      centerContent
    >
      {/* This works for the dummy image but I'm not sure about the dimensions of future generated images*/}
      <Center w="100px" bg="green.500">
        <Text> {text} </Text>
      </Center>
      <Center w="300px" bg="yellow.500">
        <Text> {text} </Text>
      </Center>
    </Container>
  );
}
