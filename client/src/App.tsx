/** @format */
import { useState } from "react";
import * as React from "react";
import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Page from "./components/slide_page";
import SlidesList from "./components/slides_list";
// Simple login page that directs to this one, redirects to itself if not logged in
// Clicking on a Slidepage takes you to Presantation Mode of that page, SlidePage but with keyboard arrow navigation
function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [presentationDetails, setPresentationDetails] = useState({
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

  const { slides } = presentationDetails;
  const [stateslides, setStateSlides] = useState([...slides]);

  const [slide, setSlide] = useState(slides[0]);

  interface propsInterface {
    slide: any;
    slides: any[];
    onSelect: (selectedSlide: any) => void;
    changeSlide: (slide: any) => void;
    presentationState: any;
    updatePresentationState: (newPresentationdetails: any) => void;
  }

  const props: propsInterface = {
    slide: slide,
    slides: stateslides,
    onSelect: (selectedSlide: any) => setSlide(selectedSlide),
    changeSlide: (slide: any) => setStateSlides(slide),
    presentationState: presentationDetails,
    updatePresentationState: (newPresentationdetails: any) => {
      setPresentationDetails(newPresentationdetails);
    },
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
        <Page {...props} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
