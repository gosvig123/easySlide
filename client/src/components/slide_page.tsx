
import { Center, Container, slideFadeConfig, Text } from '@chakra-ui/react';
import React from 'react';
import generatedText from './dummytext';
import dummyImage from './dummyimage';



export default function Page(props: any) {
  const { slides, slide, onSelect } = props;
  const { text, id, image } = slide
  console.log(slide)
  return (
    <Container flex={1} ml={140} display="flex" mt={2} minW="80vw" maxW="92vw" minH="70vh" maxH="91vh" border="1px" backgroundImage={dummyImage} backgroundSize="cover" bgRepeat="no-repeat" backgroundPosition="center" centerContent >
      {/* This works for the dummy image but I'm not sure about the dimensions of future generated images*/}
      <Center w='100px' bg='green.500' >
        <Text> {text} </Text>
      </Center >
      <Center w='300px' bg='yellow.500'>
        <Text> {text} </Text>
      </Center>
    </Container >
  );
}