'use client'
import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Page() {
  const [active, setActive] = useState('acceuil')

  return (
    <Stack>
      {/* Hero Section */}
      <Box
        width="100vw"
        position="relative"
        height={{ base: '70vh', md: '80vh' }}
        align="center"
        backgroundImage="url('/bg1.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* Contenu principal */}
        <Box
          p={6}
          bg="white"
          borderRadius="lg"
          boxShadow="xl"
          maxW="600px"
          textAlign="center"
        >
          <Heading as="h1" fontSize={{ base: '24px', md: '30px' }}>
            Vos reins travaillent en silence… <br /> Jusqu’au jour où ils s’arrêtent. <br />
            <Text as="span" color="blue.500">
              Ne les laissez pas tomber.
            </Text>
          </Heading>
          <Text fontStyle="italic" fontSize="sm" mt={4}>
            "Les maladies rénales chroniques progressent souvent sans symptômes visibles.
            L’intelligence artificielle peut détecter les premiers signes avant qu’il ne soit trop tard.
            Ensemble, utilisons la technologie pour sauver des vies."
          </Text>
        </Box>
      </Box>

      {/* Sections avec cartes */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={6}
        mt={10}
        justify="center"
        align="center"
        px={4}
      >
        {[
          { title: 'La MRC', desc: 'Comprendre les maladies rénales chroniques et leurs impacts.', color: 'blue.500', href: '/mrc' },
          { title: 'L\'IA au service des reins', desc: 'Comment l’intelligence artificielle aide à diagnostiquer plus tôt.', color: 'green.500', href: '/aimrc' },
          { title: 'Innovations médicales', desc: 'Les nouvelles avancées pour mieux traiter la MRC.', color: 'purple.500', href: '/innovmed' },
          { title: 'Besoin d’aide ?', desc: 'Contactez-nous pour plus d’informations et d’accompagnement.', color: 'red.500', href: '/innovmed' }
        ].map((item, index) => (
          <Box
            key={index}
            width={260}
            height={240}
            p={6}
            bg="gray.50"
            borderRadius="lg"
            boxShadow="md"
            textAlign="center"
            transition="0.3s"
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          >
            <Heading size="md" color={item.color}>{item.title}</Heading>
            <Text fontSize="sm" mt={3}>{item.desc}</Text>
            <Link href={item.href}>
              <Button mt={4} variant="outline" colorScheme={item.color.replace('.500', '')}>
                Explorer
              </Button>
            </Link>
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}
