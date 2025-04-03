'use client'
import { Box, Button, Heading, Stack, Text, Image } from '@chakra-ui/react'
import React from 'react'

export default function InnovationsMedicales() {
    return (
        <Stack spacing={10} align={'center'} p={10}>
            {/* Titre et description */}
            <Box textAlign={'center'} maxW={'800px'}>
                <Heading as='h2' size='xl' mb={4}>Innovations Médicales</Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                    Découvrez comment la technologie et l’intelligence artificielle révolutionnent le traitement des maladies rénales chroniques.
                </Text>
            </Box>

            {/* Cartes des innovations */}
            <Stack direction={['column', 'row']} spacing={6} wrap={'wrap'} justify={'center'}>
                {/* Carte 1: Nouvelles Technologies */}
                <Box width={300} p={5} boxShadow={'lg'} borderRadius={'md'} textAlign={'center'} bg={'gray.50'}>
                    <Image src='medical-technology.jpg' alt='Technologie médicale' borderRadius={'md'} mb={4} />
                    <Heading size={'md'}>Technologies avancées</Heading>
                    <Text fontSize={'sm'} mt={2}>L’IA améliore la précision des diagnostics et optimise les traitements rénaux.</Text>
                    <Button variant={'outline'} colorScheme='blue' mt={3}>En savoir plus</Button>
                </Box>

                {/* Carte 2: IA et Médecine Prédictive */}
                <Box width={300} p={5} boxShadow={'lg'} borderRadius={'md'} textAlign={'center'} bg={'gray.50'}>
                    <Image src='ai-medical.jpg' alt='IA en médecine' borderRadius={'md'} mb={4} />
                    <Heading size={'md'}>IA et médecine prédictive</Heading>
                    <Text fontSize={'sm'} mt={2}>Détecter les signes précoces de la MRC avant l’apparition des symptômes.</Text>
                    <Button variant={'outline'} colorScheme='blue' mt={3}>Explorer</Button>
                </Box>

                {/* Carte 3: Thérapies Personnalisées */}
                <Box width={300} p={5} boxShadow={'lg'} borderRadius={'md'} textAlign={'center'} bg={'gray.50'}>
                    <Image src='custom-treatment.jpg' alt='Thérapie personnalisée' borderRadius={'md'} mb={4} />
                    <Heading size={'md'}>Thérapies personnalisées</Heading>
                    <Text fontSize={'sm'} mt={2}>Utiliser le Big Data et l’IA pour adapter les traitements à chaque patient.</Text>
                    <Button variant={'outline'} colorScheme='blue' mt={3}>Découvrir</Button>
                </Box>
            </Stack>
        </Stack>
    )
}
