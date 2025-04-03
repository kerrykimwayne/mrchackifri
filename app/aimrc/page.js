'use client';

import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';

export default function IAServiceMRC() {
    return (
        <Stack spacing={10} align={'center'} padding={10}>
            {/* Hero Section */}
            <Box
                width={'100%'}
                height={'60vh'}
                backgroundImage="url('ai-healthcare.jpg')"
                backgroundSize="cover"
                backgroundPosition="center"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Stack bg={'rgba(0,0,0,0.6)'} p={8} borderRadius={10} textAlign={'center'} color={'white'}>
                    <Heading size={'xl'}>L'IA au service des reins</Heading>
                    <Text fontSize={'lg'}>
                        L’Intelligence Artificielle révolutionne la détection et la gestion des maladies rénales chroniques,
                        permettant un diagnostic plus précoce et des traitements plus efficaces.
                    </Text>
                </Stack>
            </Box>

            {/* Content Section */}
            <Stack spacing={8} width={'80%'}>
                <Stack direction={['column', 'row']} spacing={8} align={'center'}>
                    <Image src='ai-diagnosis.jpg' alt='AI Diagnosis' width={400} borderRadius={10} />
                    <Stack>
                        <Heading size={'md'}>Détection précoce</Heading>
                        <Text>
                            Grâce au Machine Learning, l’IA analyse des milliers de dossiers médicaux et détecte des
                            anomalies avant même l’apparition des premiers symptômes.
                        </Text>
                    </Stack>
                </Stack>

                <Stack direction={['column', 'row-reverse']} spacing={8} align={'center'}>
                    <Image src='ai-treatment.jpg' alt='AI Treatment' width={400} borderRadius={10} />
                    <Stack>
                        <Heading size={'md'}>Personnalisation des traitements</Heading>
                        <Text>
                            En analysant les données patients, l’IA recommande des traitements adaptés pour
                            maximiser leur efficacité et limiter les effets secondaires.
                        </Text>
                    </Stack>
                </Stack>

                <Stack direction={['column', 'row']} spacing={8} align={'center'}>
                    <Image src='ai-monitoring.jpg' alt='AI Monitoring' width={400} borderRadius={10} />
                    <Stack>
                        <Heading size={'md'}>Suivi en temps réel</Heading>
                        <Text>
                            L’IA permet un suivi médical en continu, alertant les patients et les médecins en
                            cas de détérioration de la fonction rénale.
                        </Text>
                    </Stack>
                </Stack>
            </Stack>

            {/* CTA Section */}
            <Stack align={'center'} spacing={4}>
                <Heading size={'lg'}>Prêt à découvrir comment l’IA sauve des vies ?</Heading>
                <Button colorScheme='blue' size='lg'>Explorer les innovations</Button>
            </Stack>
        </Stack>
    );
}
