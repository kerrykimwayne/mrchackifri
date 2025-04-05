'use client'
import { Box, Button, Heading, Image, Stack, Text, Flex } from '@chakra-ui/react';

export default function MRCPage() {
    return (
        <Stack 
            align={'center'} 
            spacing={10} 
            padding={10} 
            bg={'white'} // Fond blanc ajouté ici
            minHeight={'100vh'} // Pour garantir que le fond blanc couvre toute la page
        >
            {/* Hero Section */}
            <Box width={'100%'} height={'70vh'} position={'relative'} borderRadius={'lg'} overflow={'hidden'}>
                <Image 
                    src="kidney.jpg" 
                    alt="Illustration des reins" 
                    objectFit="cover" 
                    width={'100%'} 
                    height={'100%'} 
                    filter={'brightness(50%)'}
                />
                <Box position={'absolute'} top={0} left={0} width={'100%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Heading color={'white'} textAlign={'center'} fontSize={{ base: '32px', md: '48px' }} fontWeight={'bold'}>
                        Comprendre la Maladie Rénale Chronique (MRC)
                    </Heading>
                </Box>
            </Box>

            {/* Content Section */}
            <Stack maxWidth={'900px'} spacing={6} textAlign={'center'}>
                <Heading size={'lg'} color={'blue.600'}>Qu'est-ce que la MRC ?</Heading>
                <Text fontSize={'lg'} color={'black'}>
                    La maladie rénale chronique est une détérioration progressive et irréversible des reins. Elle évolue silencieusement, souvent sans symptômes visibles.
                </Text>
            </Stack>

            {/* Causes and Symptoms Section */}
            <Flex direction={{ base: 'column', md: 'row' }} justify={'center'} align={'center'} spacing={6} wrap="wrap" gap={6}>
                {/* Causes Box */}
                <Box width={{ base: '100%', md: '45%' }} p={6} boxShadow={'lg'} borderRadius={'lg'} bg={'gray.100'}>
                    <Heading size={'md'} mb={4} color={'blue.500'}>Causes Principales</Heading>
                    <Stack spacing={3} fontSize={'lg'}>
                        <Text color={'black'}>✅ Hypertension artérielle</Text> {/* Texte en noir */}
                        <Text color={'black'}>✅ Diabète</Text> {/* Texte en noir */}
                        <Text color={'black'}>✅ Maladies génétiques</Text> {/* Texte en noir */}
                        <Text color={'black'}>✅ Infections et maladies auto-immunes</Text> {/* Texte en noir */}
                    </Stack>
                </Box>

                {/* Symptoms Box */}
                <Box width={{ base: '100%', md: '45%' }} p={6} boxShadow={'lg'} borderRadius={'lg'} bg={'gray.100'}>
                    <Heading size={'md'} mb={4} color={'blue.500'}>Symptômes</Heading>
                    <Stack spacing={3} fontSize={'lg'}>
                    <Text color={'black'}>✅ Fatigue persistante</Text> {/* Texte en noir */}
                        <Text color={'black'}>✅ Urines mousseuses ou foncées</Text> {/* Texte en noir */}
                        <Text color={'black'}>✅ Gonflement des jambes et du visage</Text> {/* Texte en noir */}
                        <Text color={'black'}>✅ Perte d’appétit et nausées</Text> {/* Texte en noir */}
                    </Stack>
                </Box>
            </Flex>

            {/* Prevention Section */}
            <Stack 
  maxWidth={'900px'} 
  spacing={6} 
  textAlign={'center'}
  mt={7} // Ajoute de l'espace en haut (tu peux ajuster la valeur selon tes besoins)
>
  <Heading size={'lg'} color={'blue.600'}>Prévention</Heading>
                <Text fontSize={'lg'} color={'black'}> {/* Texte en noir */}
                    Adoptez un mode de vie sain pour réduire les risques.
                </Text>
                <Flex direction={'row'} justify={'center'} spacing={4} wrap={'wrap'} gap={4}>
                    <Button 
  variant={'outline'} 
  colorScheme={'blue'} 
  size={'lg'} 
  width={{ base: '100%', md: 'auto' }} 
  color={'black'} // Texte noir par défaut
  borderColor={'blue.500'} // Couleur de la bordure
  _hover={{
    color: 'black', // Le texte reste noir lors du survol
    borderColor: 'blue.500', // La bordure ne change pas
    backgroundColor: 'transparent' // Le fond reste transparent pendant le survol
  }}
>
En savoir plus</Button>



                </Flex>
            </Stack>
        </Stack>
    );
}
