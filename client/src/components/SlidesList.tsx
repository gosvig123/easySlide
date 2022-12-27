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
  const { presentation, onSelectSlide, onCreatePresentation, onCreateSlide } =
    props;

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
      borderRight="1px solid black"
    >
      <Text fontSize="24" as="b" mt="20px" mb="20px">
        Smart Slides
      </Text>
      <Flex bg="white" flexFlow="column">
        <form
          onSubmit={handleCreatePresentation}
          style={{
            width: "100%",
            marginBottom: "30px",
            backgroundColor: "transparent",
          }}
        >
          <input
            type="text"
            onChange={handlePresentationNameChange}
            value={presentationName}
            style={{
              borderWidth: "1px",
              borderStyle: "dotted",
              borderColor: "black",
              borderRadius: "8px",
            }}
            placeholder="Presentation Name"
          />
          <br />
          <button
            style={{
              marginTop: "2px",
              backgroundColor: "#319795",
              color: "white",
              width: "100%",
              borderRadius: "8px",
              borderWidth: "0px",
            }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </Flex>

      {Array.isArray(presentation?.slides) &&
        presentation?.slides.map((slide: Slide, index: number) => {
          let color = index === props.selectedSlide ? "black" : "white";
          return (
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
                borderColor: color,
                borderWidth: "1px",
                width: 190,
                height: 120,
                color: "black",
                fontSize: "smaller",
                overflow: "hidden",
                backgroundSize: "50% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                backgroundColor: "aliceblue",
                paddingRight: "45%",
                textAlign: "left",
              }}
              key={index}
              onClick={() => onSelectSlide(index)}
            >
              {slide.text}
            </Box>
          );
        })}
      <Center
        mt="20px"
        borderRadius="12px"
        mr="15px"
        ml="15px"
        w="190px"
        h="50px"
        bg="#319795"
        color="white"
        mb="30px"
      >
        <Box
          as="span"
          color="white"
          fontWeight="bold"
          fontSize="xl"
          onClick={handleCreateSlide}
        >
          +
        </Box>
      </Center>
    </Flex>
  );
}
