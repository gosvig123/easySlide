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

  interface propsInterface {
    slide: any;
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
    slide: slide,
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
        onCreateSlide={createSlide}
        onSelect={selectSlide}
      />
      <Container
        display="flex"
        h="100vh"
        minW="100vw"
        w="100vw"
        bg="#F4F7FF"
        centerContent
      >
        <Header {...props} />
        <Page {...props} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
