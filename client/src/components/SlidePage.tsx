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
      className="slide"
      mt="6"
      display="flex"
      alignItems="stretch"
      minW="78vw"
      minH="80vh"
      borderWidth="1px"
      borderRadius="lg"
      borderColor={"black"}
      mr={"80px"}
      padding="0"
      overflow="hidden"
    >
      <Container
        flex={1}
        bg="blue.400"
        padding="12"
        className="text"
        display="flex"
        flexDir="column"
        justifyContent="flex-end"
        fontSize="5xl"
        fontWeight="semibold"
        color="white"
        letterSpacing="tight"
      >
        <Text>{text}</Text>
      </Container>
      <Container
        className="image"
        flex={1}
        backgroundImage={image}
        backgroundSize="cover"
        bgRepeat="no-repeat"
        backgroundPosition="center"
      />
    </Container>
  );
}
