import { Box, Flex, Link, SimpleGrid, Text } from '@chakra-ui/react';
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
            <Link
              color="gray.800"
              _hover={{ color: 'gray.800' }}
              fontWeight="bold"
              mb={4}
            >
              Social Media
            </Link>
            <Flex>
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
          <Flex direction="column">
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Home
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Treatments
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Link 3
            </Link>
          </Flex>
          <Flex direction="column">
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Patient Information
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Link 5
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Link 6
            </Link>
          </Flex>

          <Flex direction="column">
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Patient Information
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Link 8
            </Link>
            <Link color="gray.800" _hover={{ color: 'blue.500' }}>
              Link 9
            </Link>
          </Flex>
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
