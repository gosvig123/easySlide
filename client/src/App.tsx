import * as React from 'react'
import { Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

// Simple login page that directs to this one, redirects to itself if not logged in
// Clicking on a Slidepage takes you to Presantation Mode of that page, SlidePage but with keyboard arrow navigation
// 
function App() {
  return (
    <ChakraProvider>
    <HStack>
      
      <VStack>
        <Center w='40px' h='40px' bg='tomato' color='white'>
          <PhoneIcon />
        </Center>
        <Center w='40px' h='40px' bg='tomato' color='white'>
          <PhoneIcon />
        </Center>
        <Center w='40px' h='40px' bg='tomato' color='white'>
          <PhoneIcon />
        </Center>
        <Center w='40px' h='40px' bg='tomato' color='white'>
          <PhoneIcon />
        </Center>
        <Center w='40px' h='40px' bg='tomato' color='white'>
          <Box as='span' fontWeight='bold' fontSize='lg'>
            +
          </Box>
        </Center>
      </VStack>
      <Container maxW='1050' bg='blue.600' centerContent>
      
        <Flex color='white'>
          <Center w='100px' bg='green.500'>
            <Text>Presentation Name</Text>
          </Center>
          <Input htmlSize={4} width='auto' />
          <Input htmlSize={4} width='auto' />
          <Button colorScheme='blue'>Present</Button>
        </Flex>
        <Container maxW='2xl' bg='red.600' centerContent> 
          <Center w='100px' bg='green.500'>
             <Text>Slide Title</Text>
          </Center>
          <Center w='300px' bg='yellow.500'>
              <Text>This is where the ai generate text goes. There will be close to a paragraf of test I'm guessing but different slides will have different text lengths, The box size here shouldn't be tto dependant on text length </Text>
          </Center>
        </Container>
      </Container>
    </HStack>
    </ChakraProvider>


      
  );
}

export default App;