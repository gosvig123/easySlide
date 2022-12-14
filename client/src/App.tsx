/** @format */
import { useState } from "react";
import * as React from "react";
import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Page from "./components/SlidePage";
import SlidesList from "./components/SlidesList";
import Header from "./components/Header";
// Simple login page that directs to this one, redirects to itself if not logged in
// Clicking on a Slidepage takes you to Presantation Mode of that page, SlidePage but with keyboard arrow navigation

import * as api from "./lib/api";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [presentation, setPresentation] = useState({
    id: 0,
    name: "",
    slides: [
      {
        id: "1",
        image: "",
        text: "test",
      },
    ],
  });

  const { slides } = presentation;

  // const [slide, setSlide] = useState(slides[0]);
  const [selectedSlide, setSelectedSlide] = useState(0);

  async function createPresentation(e: any) {
    const presentationName = e;

    console.log(presentationName);
    const newPresentation = await api.createPresentation(presentationName);
    console.log(newPresentation);
    await api.createSlide(newPresentation.id);
    const presentaitonFromDb = await api.getPresentation(newPresentation.id);
    console.log(presentaitonFromDb);

    return presentaitonFromDb;
  }

  async function addTextToSlide(e: any) {
    e.preventDefault();

    // const textFromOpenAi = await api.completeText(text, 40);
    // const updatedSlide = api.createText(presentation.id, slide.id, text);
    const updatedText = e.target[0].value;
    console.log("updatedText", updatedText);

    const updatedSlide = await api.createText(
      presentation.id,
      slides[selectedSlide].id,
      updatedText
    );

    const updatedSlides = slides.map((slide: any) => {
      if (slide.id === updatedSlide.id) {
        return updatedSlide;
      }
      return slide;
    });
    setPresentation({
      ...presentation,
      ...updatedSlides,
    });
  }

  function selectSlide(index: number) {
    setSelectedSlide(index);
  }
  async function createSlide() {
    const updatedPresentation = await api.createSlide(presentation.id);
    setPresentation(updatedPresentation);
    setSelectedSlide(updatedPresentation.slides.length - 1);
  }

  const slide = slides[selectedSlide];

  // const slide = presentation.slides[slide]

  interface propsInterface {
    createSlide: (e: any) => void;
    createPresentation: (e: any) => void;
    addTextToSlide: (e: any) => void;
    selectedSlide: number;
    setSelectedSlide: (selectedSlide: any) => void;
    slides: any;
    slide: any;
    presentation: any;
    setPresentation: (newPresentationdetails: any) => void;
  }

  const props: propsInterface = {
    createSlide: createSlide,
    createPresentation: createPresentation,
    addTextToSlide: addTextToSlide,
    selectedSlide: selectedSlide,
    setSelectedSlide: setSelectedSlide,
    slide: slides[selectedSlide],
    slides: slides,
    presentation: presentation,
    setPresentation: setPresentation,
  };
  return (
    <ChakraProvider>
      <SlidesList {...props} />
      <Container
        display="flex"
        h="100vh"
        minW="100vw"
        w="100vw"
        bg="blue.600"
        centerContent
      >
        <Header {...props} />
      </Container>
      <Container
        display="flex"
        h="100vh"
        minW="100vw"
        w="100vw"
        bg="#F4F7FF"
        centerContent
      >
        <Page {...props} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
