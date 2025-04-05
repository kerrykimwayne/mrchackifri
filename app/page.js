'use client'
import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Grid,
  Flex
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Page() {
  const [active, setActive] = useState('acceuil')

  return (
    <Stack spacing={12} bg="white" minH="100vh" overflow="hidden"> {/* Fond blanc global et empêcher débordement */}
      {/* Hero Section */}
      <Box
        width="100vw"
        position="relative"
        height={{ base: '70vh', md: '80vh' }}
        backgroundImage="url('/bg1.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={4}
      >
        <Box
          p={8}
          bg="rgba(255, 255, 255, 0.85)"
          borderRadius="xl"
          boxShadow="2xl"
          maxW="700px"
          textAlign="center"
        >
          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            color="gray.800"
            lineHeight="1.4"
          >
            Vos reins travaillent en silence…<br /> jusqu’au jour où ils s’arrêtent.
            <br />
            <Text as="span" color="blue.500">Ne les laissez pas tomber.</Text>
          </Heading>
          <Text fontStyle="italic" fontSize="md" mt={6} color="gray.700">
            Les maladies rénales chroniques évoluent souvent sans symptômes apparents.
            Grâce à l’intelligence artificielle, les signes précoces peuvent être détectés
            bien avant qu’il ne soit trop tard. Agissons dès aujourd’hui.
          </Text>
        </Box>
      </Box>

      {/* Section Cartes */}
      <Box maxW="7xl" mx="auto" px={4} >
        <Heading as="h2" textAlign="center" fontSize="2xl" mb={8} color="gray.800">
          Explorez notre univers
        </Heading>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
          gap={8}
        >
          {[ 
            {
              title: 'La MRC',
              desc: 'Découvrez les maladies rénales chroniques et leurs conséquences sur la santé.',
              href: '/mrc'
            },
            {
              title: 'L’IA au service des reins',
              desc: 'Comprenez comment l’IA permet une détection précoce et efficace.',
              href: '/aimrc'
            },
            {
              title: 'Innovations médicales',
              desc: 'Restez informé des dernières avancées dans le traitement des MRC.',
              href: '/innovmed'
            },
            {
              title: 'Besoin d’aide ?',
              desc: 'Contactez notre équipe pour un accompagnement personnalisé.',
              href: '/contact'
            }
          ].map((item, index) => (
            <Flex
              key={index}
              direction="column"
              justify="space-between"
              minH="260px"
              p={6}
              bg="gray.100"
              borderRadius="xl"
              boxShadow="md"
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
            >
              <Box>
                <Heading size="md" color="blue.500" mb={3}>
                  {item.title}
                </Heading>
                <Text fontSize="sm" color="gray.700">
                  {item.desc}
                </Text>
              </Box>
              <Link href={item.href} passHref>
                         <Button 
                  variant={'outline'} 
                  colorScheme='blue' 
                  mt={3} 
                  color={'gray.700'} // Couleur du texte gris foncé
                  borderColor={'gray.700'} // Couleur de la bordure gris foncé
                  _hover={{
                    backgroundColor: 'gray.600', // Changer le fond au survol vers une nuance plus foncée
                    color: 'white', // Texte blanc au survol
                    borderColor: 'gray.600' // Couleur de la bordure au survol
                  }}
                >
Explorer                </Button>
              </Link>
            </Flex>
          ))}
        </Grid>
      </Box>
    </Stack>
  )
}
