import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';




export default function Header(props: any) {

  const { slides, slide, onSelect, changeSlide } = props;
  const onEnterHandler = (e: any) => {
    if (e.key === 'Enter') {

      const input = e.target.value;
      console.log('slide', slide)
      console.log("slides", slides)





      const updatedSlide = {
        id: slide['id'],
        text: slide['text'].concat(input),
        image: slide['image']
      }


      onSelect(updatedSlide)

      // console.log("2nd", slide);
    }
  }


  return (
    <Flex color='white' mt={5} gap="25"   >
      <Center w='100px' bg='green.500'>
        <Text>Presentation Name</Text>
      </Center>

      <Input htmlSize={4} width='auto' placeholder='text prompt' onKeyDown={(e) => onEnterHandler(e)} />
      {/* This one is for generating Text. */}

      <Input htmlSize={4} width='auto' placeholder='image prompt' onKeyDown={(e) => onEnterHandler(e)} />
      {/* This one is for generating an Image. */}

      <Button colorScheme='blue'>Present</Button>
      {/* Click this to enter presentation mode. */}
    </Flex>
  );
}



