'use client'
import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';

export default function MRCPage() {
    return (
        <Stack align={'center'} spacing={10} padding={10}>
            {/* Hero Section */}
            <Box width={'100%'} height={'60vh'} position={'relative'}>
                <Image src="kidney.jpg" alt="Illustration des reins" objectFit="cover" width={'100%'} height={'100%'} borderRadius={'md'} />
                <Box position={'absolute'} top={0} left={0} width={'100%'} height={'100%'} bg={'blackAlpha.700'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Heading color={'white'} textAlign={'center'} fontSize={{ base: '24px', md: '40px' }}>
                        Comprendre la Maladie Rénale Chronique (MRC)
                    </Heading>
                </Box>
            </Box>

            {/* Content Section */}
            <Stack maxWidth={'800px'} spacing={6} textAlign={'center'}>
                <Heading size={'lg'}>Qu'est-ce que la MRC ?</Heading>
                <Text fontSize={'lg'}>
                    La maladie rénale chronique est une détérioration progressive et irréversible des reins. Elle évolue silencieusement, souvent sans symptômes visibles.
                </Text>
            </Stack>

            {/* Causes */}
            <Stack direction={{ base: 'column', md: 'row' }} spacing={6} maxWidth={'900px'}>
                <Box width={{ base: '100%', md: '45%' }} p={5} boxShadow={'lg'} borderRadius={'md'} bg={'gray.50'}>
                    <Heading size={'md'} mb={3}>Causes Principales</Heading>
                    <Text>✅ Hypertension artérielle</Text>
                    <Text>✅ Diabète</Text>
                    <Text>✅ Maladies génétiques</Text>
                    <Text>✅ Infections et maladies auto-immunes</Text>
                </Box>

                <Box width={{ base: '100%', md: '45%' }} p={5} boxShadow={'lg'} borderRadius={'md'} bg={'gray.50'}>
                    <Heading size={'md'} mb={3}>Symptômes</Heading>
                    <Text>✅ Fatigue persistante</Text>
                    <Text>✅ Urines mousseuses ou foncées</Text>
                    <Text>✅ Gonflement des jambes et du visage</Text>
                    <Text>✅ Perte d’appétit et nausées</Text>
                </Box>
            </Stack>

            {/* Prévention */}
            <Stack maxWidth={'800px'} spacing={6} textAlign={'center'}>
                <Heading size={'lg'}>Prévention</Heading>
                <Text fontSize={'lg'}>
                    Adoptez un mode de vie sain pour réduire les risques.
                </Text>
                <Stack direction={'row'} spacing={4} justify={'center'}>
                    <Button variant={'solid'} colorScheme={'blue'}>En savoir plus</Button>
                    <Button variant={'outline'} colorScheme={'blue'}>Testez votre risque</Button>
                </Stack>
            </Stack>
        </Stack>
    );
}
