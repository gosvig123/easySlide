
import { Center, Container, Text } from '@chakra-ui/react';
import React from 'react';




export default function Page() {
return(
<Container maxW='2xl' bg='red.600' centerContent> 
    <Center w='100px' bg='green.500'>
        <Text>Slide Title</Text>
    </Center>
    <Center w='300px' bg='yellow.500'>
        <Text>This is where the ai generate text goes. There will be close to a paragraf of test I'm guessing but different slides will have different text lengths, The box size here shouldn't be tto dependant on text length </Text>
    </Center>
</Container>
);
}