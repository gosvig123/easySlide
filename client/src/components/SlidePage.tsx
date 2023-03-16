/** @format */

import { Container, Textarea } from "@chakra-ui/react";
import React from "react";
import * as api from "../lib/api";

interface Slide {
  id: string;
  text?: string;
  image?: string;
}

interface SlidePageProps {
  slide: Slide;
  textValue: string;
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
  setPresentation: React.Dispatch<React.SetStateAction<any>>;
  presentation: any;
}

export default function SlidePage(props: SlidePageProps) {
  const { slide, textValue, setTextValue, setPresentation, presentation } =
    props;
  const { image } = slide || "";
  const { id } = slide || "";

  const changeTextOnSlide = async (eTargetValue: string) => {
    const newSlide = await api.updateText(id, eTargetValue);
    setTextValue(newSlide.text);
    const updatedPresentation = {
      ...presentation,
      slides: presentation.slides.map((slide: Slide) => {
        if (slide.id === newSlide.id) {
          return newSlide;
        }
        return slide;
      }),
    };
    setPresentation(updatedPresentation);
  };

  return (
    <Container
      className="slide"
      mt="7vh"
      display="flex"
      alignItems="stretch"
      minW="75vw"
      minH="80vh"
      ml="24vw"
      mr={"2vw"}
      borderWidth="1px"
      borderRadius="lg"
      padding={"0"}
      borderColor={"black"}
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
          bg={"transparent"}
          onChange={(e) => changeTextOnSlide(e.target.value)}
          value={textValue}
          border={0}
        ></Textarea>
      </Container>
    </Container>
  );
}
