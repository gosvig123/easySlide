/** @format */

import { Container, Text, Textarea } from "@chakra-ui/react";
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
  const [textValue, setTextValue] = React.useState(text || "");

  // TODO 1: manage text state for new text and existing text

  // TODO 2: store data on server onSlideChange

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
        <Textarea
          fontSize={"2xl"}
          h={"100%"}
          w={"100%"}
          onChange={(e) => setTextValue(e.target.value)}
          value={textValue}
          border={0}
        ></Textarea>
        <Text>{text}</Text>
      </Container>
    </Container>
  );
}
