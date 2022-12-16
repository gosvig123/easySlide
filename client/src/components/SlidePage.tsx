/** @format */

import { Center, Container, Text } from "@chakra-ui/react";
import React from "react";

interface Slide {
  id: string;
  text: string;
  image: string;
}

interface SlidePageProps {
  slide: Slide;
}

export default function SlidePage(props: SlidePageProps) {
  const { slide } = props;
  const { text, image } = slide;

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
      backgroundImage={image}
      backgroundSize="cover"
      bgRepeat="no-repeat"
      backgroundPosition="center"
      centerContent
    >
      <Center w="400px" h="40px" bg="#F5F5F5" border="1px">
        <Text>{text}</Text>
      </Center>
    </Container>
  );
}

/* 
<Container
        w="1024px"
        h="1024"
        bg="#F5F5F5"
        //backgroundImage={slide.image}
        backgroundSize="cover"
        bgRepeat="no-repeat"
        backgroundPosition="center"
        centerContent
      >
        <Text> placeholder </Text>
</Container>
       */
