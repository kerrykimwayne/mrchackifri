'use client';
import { Box, Button, Heading, Stack, Text, Image } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';  // Icône de flèche
import React from 'react';

export default function InnovationsMedicales() {
    const handleBack = () => {
        window.history.back();  // Retour à la page précédente
    };

    return (
        <Stack spacing={10} align={'center'} p={10} bg={'white'} minH="100vh">
            {/* Bouton retour */}
            <Button 
                onClick={handleBack}
                leftIcon={<ArrowBackIcon />} 
                variant={'solid'} borderColor={'gray.400'} colorScheme="blue" _hover={{ backgroundColor: 'blue.600' }}
                color={'black'}
                mb={4}
            >
                Retour
            </Button>


            {/* Titre et description */}
            <Box textAlign={'center'} maxW={'800px'}>
                <Heading as="h2" size="xl" mb={4} color={'blue'}>
                    Innovations Médicales
                </Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                    Découvrez comment la technologie et l’intelligence artificielle révolutionnent le traitement des maladies rénales chroniques.
                </Text>
            </Box>

            {/* Cartes des innovations */}
            <Stack direction={['column', 'row']} spacing={6} wrap={'wrap'} justify={'center'}>
                {/* Carte 1: Nouvelles Technologies */}
                <Box width={300} p={5} boxShadow={'lg'} borderRadius={'md'} textAlign={'center'} bg={'gray.50'}>
                    <Image 
                        src="medical-technology.jpg" 
                        alt="Technologie médicale" 
                        boxSize={'250px'} 
                        objectFit={'cover'} 
                        borderRadius={'md'} 
                        mb={4} 
                    />
                    <Heading size={'md'}>Technologies avancées</Heading>
                    <Text fontSize={'sm'} mt={-1} color={'black'}>
                        L’IA améliore la précision des diagnostics et optimise les traitements rénaux.
                    </Text>
                    <Button mt={4} variant={'solid'} borderColor={'gray.400'} colorScheme="blue" _hover={{ backgroundColor: 'blue.600' }}>
                        En savoir plus
                    </Button>
                </Box>

                {/* Carte 2: IA et Médecine Prédictive */}
                <Box width={300} p={5} boxShadow={'lg'} borderRadius={'md'} textAlign={'center'} bg={'gray.50'}>
                    <Image 
                        src="ai-medical.jpg" 
                        alt="IA en médecine" 
                        boxSize={'250px'} 
                        objectFit={'cover'} 
                        borderRadius={'md'} 
                        mb={4} 
                    />
                    <Heading size={'md'}>IA et médecine prédictive</Heading>
                    <Text fontSize={'sm'} mt={-1} color={'black'}>
                        Détecter les signes précoces de la MRC avant l’apparition des symptômes.
                    </Text>
                    <Button mt={4} variant={'solid'} borderColor={'gray.400'} colorScheme="blue" _hover={{ backgroundColor: 'blue.600' }}>
                        Explorer
                    </Button>
                </Box>

                {/* Carte 3: Thérapies Personnalisées */}
                <Box width={300} p={5} boxShadow={'lg'} borderRadius={'md'} textAlign={'center'} bg={'gray.50'}>
                    <Image 
                        src="custom-treatment.jpg" 
                        alt="Thérapie personnalisée" 
                        boxSize={'250px'} 
                        objectFit={'cover'} 
                        borderRadius={'md'} 
                        mb={4} 
                    />
                    <Heading size={'md'}>Thérapies personnalisées</Heading>
                    <Text fontSize={'sm'} mt={-1} color={'black'}>
                        Utiliser le Big Data et l’IA pour adapter les traitements à chaque patient.
                    </Text>
                    <Button mt={4} variant={'solid'} borderColor={'gray.400'} colorScheme="blue" _hover={{ backgroundColor: 'blue.600' }}>
                        Découvrir
                    </Button>
                </Box>
            </Stack>

            {/* Section des boutons sur une même ligne */}
            <Stack direction="row" spacing={4} justify="center" align="center">
                <Button variant={'outline'} colorScheme="blue" mt={3} color={'gray.700'} borderColor={'gray.400'} _hover={{ backgroundColor: 'gray.600', color: 'white', borderColor: 'gray.600' }}>
                    Voir les projets
                </Button>
                <Button variant={'outline'} colorScheme="blue" mt={3} color={'gray.700'} borderColor={'gray.400'} _hover={{ backgroundColor: 'gray.600', color: 'white', borderColor: 'gray.600' }}>
                    Contactez-nous
                </Button>
            </Stack>
        </Stack>
    );
}
