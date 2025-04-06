'use client';
import { useState } from 'react';
import { Box, Button, Heading, Image, Stack, Text, Flex } from '@chakra-ui/react';

export default function MRCPage() {
  const [showMore, setShowMore] = useState(false);

  const collapsedHeight = '320px'; // même hauteur pour les deux blocs
  const expandedHeight = 'auto';

  return (
    <Stack
      align={'center'}
      spacing={10}
      padding={10}
      bg={'white'}
      minHeight={'100vh'}
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

      {/* Content Intro */}
      <Stack maxWidth={'900px'} spacing={6} textAlign={'center'}>
        <Heading size={'lg'} color={'blue.600'}>Qu'est-ce que la MRC ?</Heading>
        <Text fontSize={'lg'} color={'black'}>
          La maladie rénale chronique est une détérioration progressive et irréversible des reins. Elle évolue silencieusement, souvent sans symptômes visibles.
        </Text>
      </Stack>

      {/* Causes and Symptoms */}
      <Flex direction={{ base: 'column', md: 'row' }} justify={'center'} align={'flex-start'} gap={6} wrap="wrap">
        {/* Causes Box */}
        <Box width={{ base: '100%', md: '45%' }} p={6} boxShadow={'lg'} borderRadius={'lg'} bg={'gray.100'}>
        <Heading size={'md'} mb={4} color={'blue.500'}>Causes de la MRC</Heading>

          <Box
            maxHeight={showMore ? expandedHeight : collapsedHeight}
            overflow="hidden"
            transition="max-height 0.9s ease"
          >
            <Stack spacing={2} fontSize={'lg'} color={'black'}>
              <Text color={'black'}>✅ Hypertension artérielle</Text>
            <Text color={'black'}>✅ Diabète</Text>
            <Text color={'black'}>✅ Maladies génétiques</Text>
            <Text color={'black'}>✅ Infections et maladies auto-immunes</Text>
            <Text color={'black'}>✅ Glomérulonéphrite chronique</Text>
                <Text color={'black'}>✅ Utilisation prolongée de certains médicaments (anti-inflammatoires, etc.)</Text>
                <Text color={'black'}>✅ Obstruction des voies urinaires</Text>
                <Text color={'black'}>✅ Malformations rénales congénitales</Text>
                <Text color={'black'}>✅ Polykystose rénale</Text>
                <Text color={'black'}>✅ Néphropathie due au reflux vésico-urétéral</Text>
                <Text color={'black'}>✅ Empoisonnements chroniques (plomb, cadmium...)</Text>
                <Text color={'black'}>✅ Tabagisme et abus d’alcool</Text>
                <Text color={'black'}>✅ Infections urinaires à répétition</Text>
                <Text color={'black'}>✅ Lésions rénales dues à la déshydratation sévère répétée</Text>
                <Text color={'black'}>✅ Radiations ou chimiothérapies rénales toxiques</Text>

                <Text color={'black'}>✅ Athérosclérose rénale</Text>
                <Text color={'black'}>✅ Sténose de l’artère rénale</Text>
                <Text color={'black'}>✅ Thrombose veineuse rénale</Text>
                <Text color={'black'}>✅ Médicaments néphrotoxiques (ex : AINS, aminosides)</Text>
                <Text color={'black'}>✅ Intoxication aux métaux lourds (plomb, mercure, etc.)</Text>
                <Text color={'black'}>✅ Contrastes iodés utilisés en imagerie</Text>
         </Stack>
          </Box>
        </Box>

        {/* Symptoms Box */}
        <Box width={{ base: '100%', md: '45%' }} p={6} boxShadow={'lg'} borderRadius={'lg'} bg={'gray.100'}>
          <Heading size={'md'} mb={4} color={'blue.500'}>Symptômes de la MRC</Heading>
          <Box
            maxHeight={showMore ? expandedHeight : collapsedHeight}
            overflow="hidden"
            transition="max-height 0.9s ease"
          >
            <Stack spacing={2} fontSize={'lg'} color={'black'}>
              <Text fontWeight={'bold'}>🟢 Symptômes précoces :</Text>
              <Text>✔️ Fatigue persistante</Text>
              <Text>✔️ Perte d’appétit, nausées</Text>
              <Text>✔️ Urines mousseuses</Text>
              <Text>✔️ Besoin fréquent d’uriner la nuit</Text>
              <Text>✔️ Hypertension artérielle</Text>
              <Text>✔️ Anémie légère, teint pâle</Text>

              <Text fontWeight={'bold'} mt={4}>🟡 Symptômes intermédiaires :</Text>
              <Text>✔️ Œdèmes (jambes, paupières)</Text>
              <Text>✔️ Crampes musculaires nocturnes</Text>
              <Text>✔️ Démangeaisons persistantes</Text>
              <Text>✔️ Peau sèche, teint grisâtre</Text>
              <Text>✔️ Somnolence, troubles de la concentration</Text>
              <Text>✔️ Douleurs osseuses</Text>
              <Text>✔️ Mauvais goût, haleine ammoniacale</Text>

              <Text fontWeight={'bold'} mt={4}>🔴 Symptômes graves (stade terminal) :</Text>
              <Text>✔️ Confusion, troubles de la conscience</Text>
              <Text>✔️ Convulsions, coma (urémie sévère)</Text>
              <Text>✔️ Rétention d’eau sévère, œdème pulmonaire</Text>
              <Text>✔️ Troubles cardiaques (palpitations, arythmies)</Text>
              <Text>✔️ Anurie ou oligurie (peu ou pas d'urine)</Text>
              <Text>✔️ Paresthésies (fourmillements)</Text>
            </Stack>
          </Box>
        </Box>
      </Flex>

      {/* Voir plus button */}
      <Button
        variant={'outline'}
        color={'gray.700'} 
        colorScheme={'blue'}
        mt={3} 
        borderColor={'gray.400'} _hover={{ backgroundColor: 'gray.600', color: 'white', borderColor: 'gray.600' }}
        size={'md'}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Voir moins' : 'Voir plus'}
      </Button>
      

      {/* Prevention Section */}
      <Stack maxWidth={'900px'} spacing={6} textAlign={'center'} mt={7}>
        <Heading size={'lg'} color={'blue.600'}>Prévention</Heading>
        <Text fontSize={'lg'} color={'black'}>
          Adoptez un mode de vie sain pour réduire les risques.
        </Text>
        <Flex direction={'row'} justify={'center'} wrap={'wrap'} gap={4}>
          <Button
            variant={'outline'}
            colorScheme={'blue'}
            size={'lg'}
            width={{ base: '100%', md: 'auto' }}
            color={'black'}
            borderColor={'blue.500'}
            _hover={{
              color: 'black',
              borderColor: 'blue.500',
              backgroundColor: 'transparent'
            }}
          >
            En savoir plus
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
}
