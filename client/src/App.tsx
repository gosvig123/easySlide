/** @format */

import * as React from "react";
import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Page from "./components/slide_page";
import SlidesList from "./components/slides_list";
// Simple login page that directs to this one, redirects to itself if not logged in
// Clicking on a Slidepage takes you to Presantation Mode of that page, SlidePage but with keyboard arrow navigation
function App() {
  return (
    <ChakraProvider>
      <SlidesList />
      <Container maxW="1050" bg="blue.600" centerContent>
        <Header />
        <Page />
      </Container>
    </ChakraProvider >
  );
}

export default App;
