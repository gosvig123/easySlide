/** @format */
import { useState } from "react";
import * as React from "react";
import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Page from "./components/slide_page";
import SlidesList from "./components/slides_list";
import { type } from "@testing-library/user-event/dist/type";
// Simple login page that directs to this one, redirects to itself if not logged in
// Clicking on a Slidepage takes you to Presantation Mode of that page, SlidePage but with keyboard arrow navigation
function App() {



  const dummyData: presentation = {
    id: 1234,
    name: "How to lose a world cup with the best player in history",
    slides: [
      {
        id: "1",
        image: "https://oaidalleapiprodscus.blob.core.windows.net/…",
        text: "Wednesday… the best day"
      },
      {
        id: "2",
        image: "https://oaidalleapiprodscus.blob.core.windows.net/…",
        text: "Friday is also a good day"
      }
    ]
  }

  const slides = [
    {
      id: '1',
      image: "https://oaidalleapiprodscus.blob.core.windows.net/…",
      text: "Wednesday… the best day"
    },
    {
      id: "2",
      image: "https://oaidalleapiprodscus.blob.core.windows.net/…",
      text: "Friday is also a good day"
    }
  ];
  const [slide, setSlide] = useState(slides[0]);


  interface presentation {
    id: number;
    name: string;
    slides: {
      id: string;
      image: string;
      text: string;
    }[];
  }

  interface propsInterface {
    slide: any;
    slides: any[];
    onSelect: (selectedSlide: any) => void;
  }


  const props: propsInterface = {
    slide: slide,
    slides: slides,
    onSelect: (selectedSlide: any) => setSlide(selectedSlide)
  }

  return (

    <ChakraProvider>
      <SlidesList {...props} />
      <Container display='flex' h="100vh" minW="100vw" w="100vw" bg="blue.600" centerContent>
        <Header />
        <Page {...props} />
      </Container>
    </ChakraProvider >
  );
}

export default App;

