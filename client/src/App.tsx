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

type Slide = {
  id: string;
  image: string;
  text: string;
  presentationid: number;
};

type Presentation = {
  id: number;
  name: string;
  slides: Array<Slide>;
};

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [presentation, setPresentation] = useState<Presentation>();

  const [selectedSlide, setSelectedSlide] = useState(0);

  async function createPresentation(e: any) {
    const presentationName = e;

    const newPresentation = await api.createPresentation(presentationName);
    await api.createSlide(newPresentation.id);
    const result = await api.getPresentation(newPresentation.id);
    setPresentation(result);

    return;
  }

  async function addTextToSlide(e: any) {
    // const textFromOpenAi = await api.completeText(text, 40);
    // const updatedSlide = api.createText(presentation.id, slide.id, text);
    const textInput = e.target.value;

    // connects with OpenAI
    const generatedText = await api.completeText(textInput, 40);

    const presentationUpdated = await api.getPresentation(presentation?.id);
    setPresentation(presentationUpdated);
  }

  async function createSlide() {
    const updatedPresentation = await api.createSlide(presentation?.id);
    setSelectedSlide(updatedPresentation.slides.length - 1);
    setPresentation(updatedPresentation);
  }

  interface propsInterface {
    createSlide: (e: any) => void;
    createPresentation: (e: any) => void;
    addTextToSlide: (e: any) => void;
    selectedSlide: number;
    setSelectedSlide: (selectedSlide: any) => void;
    presentation: any;
    setPresentation: (newPresentationdetails: any) => void;
  }

  const props: propsInterface = {
    createSlide,
    createPresentation,
    addTextToSlide,
    selectedSlide,
    setSelectedSlide,
    presentation,
    setPresentation,
  };
  return (
    <ChakraProvider>
      <SlidesList {...props} />
      <Container
        display="flex"
        h="100vh"
        minW="100vw"
        w="100vw"
        bg="#F4F7FF"
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
