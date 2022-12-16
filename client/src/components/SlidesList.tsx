/** @format */
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

interface SlidesListProps {
  presentation: any;
  selectedSlide: number;
  onSelectSlide: (index: number) => void;
  onCreatePresentation: (presentationName: string) => void;
  onCreateSlide: () => void;
}

export default function SlidesList(props: SlidesListProps) {
  const {
    presentation,

    onSelectSlide,
    onCreatePresentation,
    onCreateSlide,
  } = props;

  type Slide = {
    id: number;
    image: string;
    text: string;
  };

  const [presentationName, setPresentationName] = React.useState("");

  const handlePresentationNameChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (e) => {
    setPresentationName(e.target.value);
    return;
  };
  const handleCreatePresentation: React.ChangeEventHandler<
    HTMLFormElement
  > = async (e: any) => {
    e.preventDefault();
    await onCreatePresentation(presentationName);
  };

  const handleCreateSlide: React.MouseEventHandler<HTMLElement> = async () => {
    await onCreateSlide();
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
        <form onSubmit={handleCreatePresentation}>
          <input
            type="text"
            onChange={handlePresentationNameChange}
            value={presentationName}
            placeholder="Presentation Name"
          />
          <button type="submit">Submit</button>
        </form>
      </Flex>
      {Array.isArray(presentation?.slides) &&
        presentation?.slides.map((slide: Slide, index: number) => (
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
            onClick={() => onSelectSlide(index)}
          >
            {slide.text}
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
          onClick={handleCreateSlide}
        >
          +
        </Box>
      </Center>
    </Flex>
  );
}
