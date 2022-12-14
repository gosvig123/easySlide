/** @format */
import { useState } from "react";
import * as React from "react";
import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Page from "./components/SlidePage";
import SlidesList from "./components/SlidesList";
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
    e.preventDefault();
    const presentationName = e.target[0].value;

    const newPresentation = await api.createPresentation(presentationName);
    console.log(newPresentation);
    await api.createSlide(newPresentation.id);
    const presentaitonFromDb = await api.getPresentation(newPresentation.id);
    console.log(presentaitonFromDb);
    setPresentation(presentaitonFromDb);

    return;
  }
  interface propsInterface {
    // slide: any;
    onSelect: (selectedSlide: any) => void;
    presentation: any;
    updatePresentationState: (newPresentationdetails: any) => void;
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
  const props: propsInterface = {
    // slide: slide
    onSelect: selectSlide,
    presentation,
    updatePresentationState: (newPresentationdetails: any) => {
      setPresentation(newPresentationdetails);
    },
  };

  // const slide = presentation.slides[slide]

  return (
    <ChakraProvider>
      <SlidesList
        presentation={presentation}
        setPresentation={setPresentation}
        onCreateSlide={createSlide}
        onSelect={selectSlide}
        createPresentation={createPresentation}
        slides={slides}
        slide={slide}
      />
      <Container
        display="flex"
        h="100vh"
        minW="100vw"
        w="100vw"
        bg="blue.600"
        centerContent
      >
        <Header
          {...props}
          slide={slide}
          slides={slides}
          presentation={presentation}
        />
      </Container>
      <Container
        display="flex"
        h="100vh"
        minW="100vw"
        w="100vw"
        bg="#F4F7FF"
        centerContent
      >
        <Page {...props} slide={slide} slides={slides} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
