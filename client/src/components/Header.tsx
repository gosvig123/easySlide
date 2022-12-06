import React from 'react';
import { Box } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Center, Square, Circle } from '@chakra-ui/react';
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
    <Input htmlSize={4} width='auto' placeholder='image prompt' onKeyDown={(e)=>onEnterHandler(e)} />
    <Button colorScheme='blue'>Present</Button>
</Flex>
);
}



