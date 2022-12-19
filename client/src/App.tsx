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
  createdAt: string;
};

type Presentation = {
  id: number;
  name: string;
  slides: Array<Slide>;
};

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [presentation, setPresentation] = useState<Presentation>();
  const [selectedSlide, setSelectedSlide] = useState(
    presentation && presentation.slides ? presentation.slides.length - 1 : 0
  );

  async function createPresentation(presentationName: string) {
    const newPresentation = await api.createPresentation(presentationName);
    await api.createSlide(newPresentation.id);
    const result = await api.getPresentation(newPresentation.id);
    setPresentation(result);
  }

  async function addTextToSlide(textPrompt: string): Promise<void> {
    if (!presentation) {
      throw new Error("There's no presentation opened");
    }

    const updatedSlide = await api.completeText(
      textPrompt,
      40,
      presentation.id,
      presentation.slides[selectedSlide].id
    );

    setPresentation({
      ...presentation,
      slides: presentation.slides.map((slide, index) => {
        if (index !== selectedSlide) return slide;

        return updatedSlide;
      }),
    });
  }

  async function addImageToSlide(imagePrompt: string): Promise<void> {
    if (!presentation) {
      throw new Error("There's no presentation opened");
    }

    const updatedSlide = await api.generateImage(
      imagePrompt,
      1,
      "1024x1024",
      presentation.id,
      presentation.slides[selectedSlide].id
    );

    setPresentation({
      ...presentation,
      slides: presentation.slides.map((slide, index) => {
        if (index !== selectedSlide) return slide;

        return updatedSlide;
      }),
    });
  }

  async function createSlide() {
    const updatedPresentation = await api.createSlide(presentation?.id);
    setSelectedSlide(updatedPresentation.slides.length - 1);
    setPresentation({
      ...updatedPresentation,
      slides: updatedPresentation.slides.sort(function (a: Slide, b: Slide) {
        var c: any = new Date(a.createdAt);
        var d: any = new Date(b.createdAt);
        return c - d;
      }),
    });
  }

  return (
    <ChakraProvider>
      <SlidesList
        presentation={presentation}
        selectedSlide={selectedSlide}
        onSelectSlide={setSelectedSlide}
        onCreatePresentation={createPresentation}
        onCreateSlide={createSlide}
      />

      <Container
        display="flex"
        h="100vh"
        minW="100vw"
        w="100vw"
        bg="#F4F7FF"
        border="1px"
        centerContent
        pl={"200px"}
        pb={"60px"}
      >
        <Header
          onSubmitTextPrompt={addTextToSlide}
          onSubmitImagePrompt={addImageToSlide}
        />

        {presentation && <Page slide={presentation?.slides[selectedSlide]} />}
      </Container>
    </ChakraProvider>
  );
}

export default App;
