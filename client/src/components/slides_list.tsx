/** @format */
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { createSlide, getPresentation } from "./requests";

export default function SlidesList(props: any) {
  const { onSelect, updatePresentationState, presentationState } = props;

  const { slides } = presentationState;

  // create use state for slides
  // const [slides, setSlides] = useState<any[]>([]);

  // function useeffect to get slides from props after render
  // React.useEffect(() => {
  //   testpresentation = "whatever you want it to be :)"
  //   console.log(testpresentation)
  // }, [testpresentation]);

  const addSlide = async () => {
    console.log("presentationState.id", presentationState.id);

    createSlide(presentationState.id);
    const updatedPresentation = await getPresentation(presentationState.id);
    console.log("updated data from db", updatedPresentation);
    updatePresentationState(await updatedPresentation);
    console.log("updated presentationstate:", await presentationState);
    console.log(slides);
    return;
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
            }}
            key={index}
            onClick={() => onSelect(slide)}
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
