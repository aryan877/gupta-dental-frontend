import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { RiStarSFill } from 'react-icons/ri';

function Stats() {
  return (
    <Grid
      templateColumns="1fr min-content 1fr"
      gap={4}
      bg="blue.500"
      alignItems="center"
      w="full"
      color="white"
      py={4}
    >
      <VStack spacing={2} textAlign="center">
        <Image src="./svg/patient.svg" boxSize="3rem" />
        <Heading as="h3" size="xl" fontWeight="bold">
          1000+
        </Heading>
        <Text fontSize="lg" fontWeight="semibold">
          Happy Customers
        </Text>
      </VStack>
      <Divider orientation="vertical" />
      <VStack spacing={2} textAlign="center">
        <Image src="./svg/reviews.svg" boxSize="3rem" />
        <Heading as="h3" size="xl" fontWeight="bold">
          500+
        </Heading>
        <Text fontSize="lg" fontWeight="semibold">
          Practo Reviews
        </Text>
      </VStack>
    </Grid>
  );
}

export default Stats;
