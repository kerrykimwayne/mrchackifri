'use client';
import { Box, Button, Heading, Stack, Text, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

export default function Sensibilisation() {
    return (
        <Box bg={'gray.50'} minH="100vh" p={10}>
            {/* En-tête */}
            <Box textAlign={'center'} mb={12}>
                <Heading as="h1" size="2xl" color="blue.600" mb={4}>
                    Besoin d'Aide ?
                </Heading>
                <Text fontSize={'lg'} color={'gray.700'}>
                    Découvrez comment vous pouvez aider et trouver des ressources essentielles pour le bien-être de tous.
                </Text>
            </Box>

            {/* Section des ressources */}
            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                {/* Bloc de ressource 1 */}
                <Box p={6} borderRadius={'lg'} bg={'blue.50'} boxShadow={'lg'} textAlign={'center'}>
                    <Image 
                        src="a.png" 
                        alt="Ressource 1" 
                        borderRadius="md" 
                        mb={4} 
                    />
                    <Heading size="md" color={'blue.700'} mb={2}>
                        Ressource 1 : Aide Psychologique
                    </Heading>
                    <Text fontSize={'sm'} color={'gray.600'}>
                        Des professionnels sont disponibles pour offrir un soutien psychologique et émotionnel.
                    </Text>
                    <Button
                        mt={4}
                        variant={'solid'}
                        colorScheme="blue"
                        _hover={{ backgroundColor: 'blue.600' }}
                    >
                        Obtenez de l'aide
                    </Button>
                </Box>

                {/* Bloc de ressource 2 */}
                <Box p={6} borderRadius={'lg'} bg={'blue.50'} boxShadow={'lg'} textAlign={'center'}>
                    <Image 
                        src="v.jpg" 
                        alt="Ressource 2" 
                        borderRadius="md" 
                        mb={4} 
                    />
                    <Heading size="md" color={'blue.700'} mb={2}>
                        Ressource 2 : Aide Alimentaire
                    </Heading>
                    <Text fontSize={'sm'} color={'gray.600'}>
                        Des distributions alimentaires sont organisées pour aider ceux qui en ont besoin.
                    </Text>
                    <Button
                        mt={4}
                        variant={'solid'}
                        colorScheme="blue"
                        _hover={{ backgroundColor: 'blue.600' }}
                    >
                        En savoir plus
                    </Button>
                </Box>

                {/* Bloc de ressource 3 */}
                <Box p={6} borderRadius={'lg'} bg={'blue.50'} boxShadow={'lg'} textAlign={'center'}>
                    <Image 
                        src="/ai-medical.jpg" 
                        alt="Ressource 3" 
                        borderRadius="md" 
                        mb={4} 
                    />
                    <Heading size="md" color={'blue.700'} mb={2}>
                        Ressource 3 : Aide Juridique
                    </Heading>
                    <Text fontSize={'sm'} color={'gray.600'}>
                        Trouvez des services d'assistance juridique pour vos droits et démarches.
                    </Text>
                    <Button
                        mt={4}
                        variant={'solid'}
                        colorScheme="blue"
                        _hover={{ backgroundColor: 'blue.600' }}
                    >
                        Contactez un expert
                    </Button>
                </Box>
            </SimpleGrid>

            {/* Section d'engagement */}
            <Box mt={16} textAlign="center">
                <Heading size="lg" color={'blue.600'} mb={6}>
                    Comment vous pouvez aider ?
                </Heading>
                <Text fontSize={'lg'} color={'gray.700'} mb={6}>
                    Ensemble, nous pouvons faire la différence. Engagez-vous et contribuez à rendre le monde meilleur.
                </Text>
                <Button
                    variant={'solid'}
                    colorScheme="blue"
                    size="lg"
                    _hover={{ backgroundColor: 'blue.600' }}
                    mt={4}
                >
                    Devenez Bénévole
                </Button>
            </Box>
        </Box>
    );
}
