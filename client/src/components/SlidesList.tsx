/** @format */
import React, { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import * as api from "../lib/api";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { type } from "os";

interface SlidesListProps {
  presentation: any;
  selectedSlide: number;
  onSelectSlide: (index: number) => void;
  onCreatePresentation: (presentationName: string) => void;
  onCreateSlide: () => void;
  onChangePresentation: (presentation: object) => void;
}

export default function SlidesList(props: SlidesListProps) {
  const {
    presentation,
    onSelectSlide,
    onCreatePresentation,
    onCreateSlide,
    onChangePresentation,
  } = props;

  type Slide = {
    id: number;
    image: string;
    text: string;
  };

  interface presentations {
    data: presentations[];
  }

  const [allPresentations, setAllPresentations] = React.useState<any>([]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getAllPresentations: presentations = api
      .getAllPresentations()
      .then((res: any) => {
        setAllPresentations(res);
      });
  }, []);

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
    onCreatePresentation(presentationName);
  };

  const handleCreateSlide: React.MouseEventHandler<HTMLElement> = async () => {
    onCreateSlide();
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
      <Text fontSize="24" as="b" mb="20px">
        Smart Slides
      </Text>

      <Tabs w={"100%"} p={0} align="center">
        <TabList border={0}>
          <Tab
            w={"33%"}
            fontSize="1em"
            borderWidth={1}
            borderColor="black"
            borderRadius="8px"
          >
            Work
          </Tab>
          <Tab
            w={"33%"}
            fontSize="1em"
            borderWidth={1}
            borderColor="black"
            borderRadius="8px"
          >
            Create
          </Tab>
          <Tab
            w={"33%"}
            fontSize="1em"
            borderWidth={1}
            borderColor="black"
            borderRadius="8px"
          >
            Select
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
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
                      textAlign: "center",
                      paddingLeft: "5px",
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
          </TabPanel>
          <TabPanel textAlign={"left"}>
            <label
              htmlFor="presentationName"
              style={{
                fontSize: "1em",
                fontWeight: "bold",
                color: "black",
                marginBottom: "1vh",
              }}
            >
              Create Presentation
            </label>
            <form
              onSubmit={handleCreatePresentation}
              style={{
                width: "100%",
                marginBottom: "5vh",
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
                  width: "100%",
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
                Create
              </button>
            </form>
          </TabPanel>
          <TabPanel>
            <h2
              style={{
                fontSize: "1em",
                fontWeight: "bold",
                borderBottom: "1px solid black",
              }}
            >
              Your presentations
            </h2>
            <Box pt={3}>
              {Array.isArray(allPresentations) &&
                allPresentations?.map(
                  (presentationNames: any, index: number) => {
                    return (
                      <Box
                        onClick={() =>
                          onChangePresentation(allPresentations[index])
                        }
                        fontSize={"1em"}
                        key={presentationNames["id"]}
                      >
                        {presentationNames.name}
                      </Box>
                    );
                  }
                )}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
