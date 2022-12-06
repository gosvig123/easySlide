import React from 'react';
import { Box } from '@chakra-ui/react';
import {VStack } from '@chakra-ui/react';
import { Center} from '@chakra-ui/react';
import { PhoneIcon} from '@chakra-ui/icons';


export default function SlidesList() {
    return(
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
    );
}