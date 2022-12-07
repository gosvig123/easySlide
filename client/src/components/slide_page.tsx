
import { Center, Container, Text } from '@chakra-ui/react';
import React from 'react';
import generatedText from './dummytext';
import dummyImage from './dummyimage'; 



export default function Page() {
  return(
    <Container maxW='2xl' height='350px' backgroundImage={dummyImage} bgRepeat="no-repeat" backgroundPosition="center" centerContent>
    {/* This works for the dummy image but I'm not sure about the dimensions of future generated images*/}     
      <Center w='100px' bg='green.500'>
        <Text>Slide Title</Text>
      </Center>
      <Center w='300px' bg='yellow.500'>
        <Text> {generatedText} </Text>
      </Center>
    </Container>
  );
}