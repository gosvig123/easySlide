/** @format */

import { Container, Text } from "@chakra-ui/react";
import React from "react";

interface Slide {
  id: string;
  text?: string;
  image?: string;
}

interface SlidePageProps {
  slide: Slide;
}

export default function SlidePage(props: SlidePageProps) {
  const { slide } = props;
  const { text } = slide || "";
  const { image } = slide || "";

  return (
    <Container
      className="slide"
      mt="7vh"
      display="flex"
      alignItems="stretch"
      minW="78vw"
      minH="80vh"
      ml="17vw"
      borderWidth="1px"
      borderRadius="lg"
      borderColor={"black"}
      padding="0"
      overflow="hidden"
    >
      <Container
        className="text"
        flex={1}
        bg="blue.400"
        padding="12"
        pr={"55%"}
        display="flex"
        flexDir="column"
        justifyContent="flex-end"
        fontSize="5xl"
        border="none"
        fontWeight="semibold"
        color="white"
        letterSpacing="tight"
        backgroundImage={image}
        backgroundSize="50% 100%"
        bgRepeat="no-repeat"
        bgPosition="right"
      >
        <Text>{text}</Text>
      </Container>
    </Container>
  );
}
