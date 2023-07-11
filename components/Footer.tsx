import {
  Box,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
function Footer() {
  return (
    <Box bg="blue.100" pt={16} color="gray.800">
      <Box textAlign="center" px={4} maxW="7xl" mx="auto" fontSize="lg">
        <SimpleGrid
          columns={[1, 2, 4]}
          spacing={8}
          justifyContent="center"
          textAlign="start"
          mb={6}
        >
          <Flex direction="column">
            <Box mb={8} display="flex" alignItems="center" fontSize="lg">
              <Image
                src="./img/CLINIC_LOGO_BLACK.svg"
                alt="Logo"
                h={20}
                my={0}
                objectFit="contain"
              />
              <Box
                mt={4}
                ml={4}
                alignItems="start"
                display="flex"
                flexDirection="column"
              >
                <Text fontSize="md" fontWeight="bold">
                  Dr. Gupta's
                </Text>
                <Text fontSize="xs" fontWeight="bold" mt={-4}>
                  Dental Clinic & Orthodontic Centre
                </Text>
              </Box>
            </Box>

            <Text
              color="gray.800"
              _hover={{ color: 'gray.800' }}
              fontWeight="bold"
              mb={4}
            >
              Social Media
            </Text>
            <Flex fontSize="sm" fontWeight="semibold">
              <Link mr={4} color="gray.800" _hover={{ color: 'blue.500' }}>
                <FaFacebook size={24} />
              </Link>
              <Link mr={4} color="gray.800" _hover={{ color: 'blue.500' }}>
                <FaTwitter size={24} />
              </Link>
              <Link color="gray.800" _hover={{ color: 'blue.500' }}>
                <FaInstagram size={24} />
              </Link>
            </Flex>
          </Flex>
          <VStack
            align="flex-start"
            direction="column"
            fontSize="sm"
            fontWeight="semibold"
          >
            <Text fontSize="lg" color="blue.500">
              Treatments
            </Text>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Braces & Aligners
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Teeth Cleaning
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Dental Fillings
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Laser Teeth Whitening
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Surgical Extraction
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Dentures
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Full Mouth Reconstruction
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Root Canal Treatment
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Child Dentistry
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Dental Implants
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Bridge & Crown
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Wisdom Teeth Removal
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Smile Makeover
            </Link>
          </VStack>

          <VStack
            align="flex-start"
            direction="column"
            fontSize="sm"
            fontWeight="semibold"
          >
            <Text fontSize="lg" color="blue.500">
              Patient Information
            </Text>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Self-Ligating Braces
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Wisdom Tooth Problems
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Undergoing Root Canal Treatment
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Undergoing Orthodontic Treatment
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Wearing Dentures
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Bad Breath
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Post Surgical Instructions
            </Link>
          </VStack>

          <VStack
            align="flex-start"
            direction="column"
            fontSize="sm"
            fontWeight="semibold"
          >
            <Text fontSize="lg" color="blue.500">
              About Us
            </Text>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Home
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              About Us
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Smile Gallery
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Blog
            </Link>
          </VStack>
        </SimpleGrid>
        <Flex justifyContent="center" pt={8}>
          <Text color="gray.800" fontSize="sm">
            © {new Date().getFullYear()}. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
