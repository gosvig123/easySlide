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
import Header from './components/Header'
import Page from './components/slide_page'
import SlidesList from './components/slides_list'
// Simple login page that directs to this one, redirects to itself if not logged in
// Clicking on a Slidepage takes you to Presantation Mode of that page, SlidePage but with keyboard arrow navigation
// 
function App() {
  return (
    <ChakraProvider>
    <HStack>
      
      <SlidesList/>
      
      <Container maxW='1050' bg='blue.600' centerContent>
        <Header/>
        <Page/>
      </Container>  
      
      
    </HStack>
    </ChakraProvider>


      
  );
}

export default App;