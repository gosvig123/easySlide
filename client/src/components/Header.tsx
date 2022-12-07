import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';




export default function Header() {
  const onEnterHandler = (e :any) => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
      //instead of console.log, send to openai 
      }
    }


  return(      
    <Flex color='white'>
      <Center w='100px' bg='green.500'>
        <Text>Presentation Name</Text>
      </Center>
      
      <Input htmlSize={4} width='auto' placeholder='text prompt' onKeyDown={(e)=>onEnterHandler(e)} />
      {/* This one is for generating Text. */}
      
      <Input htmlSize={4} width='auto' placeholder='image prompt' onKeyDown={(e)=>onEnterHandler(e)} />
      {/* This one is for generating an Image. */}
      
      <Button colorScheme='blue'>Present</Button>
      {/* Click this to enter presentation mode. */}
    </Flex>
  );
}



