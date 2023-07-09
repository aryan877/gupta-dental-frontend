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
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { RiStarSFill } from 'react-icons/ri';

function Stats() {
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [practoReviews, setPractoReviews] = useState(0);

  useEffect(() => {
    const incrementCounters = () => {
      setHappyCustomers(1000);
      setPractoReviews(500);
    };

    incrementCounters();
  }, []);

  return (
    <Grid
      templateColumns="1fr min-content 1fr"
      gap={4}
      bg="blue.500"
      alignItems="center"
      w="full"
      px={4}
      color="white"
      py={4}
    >
      <VStack spacing={2} textAlign="center">
        <Image src="./svg/patient.svg" boxSize="3rem" />
        <Heading as="h3" size="lg" fontWeight="bold">
          <CountUp start={0} end={happyCustomers} duration={2} separator="," />+
        </Heading>
        <Text fontSize="lg" fontWeight="semibold">
          Happy Customers
        </Text>
      </VStack>
      <Divider orientation="vertical" />
      <VStack spacing={2} textAlign="center">
        <Image src="./svg/reviews.svg" boxSize="3rem" />
        <Heading as="h3" size="lg" fontWeight="bold">
          <CountUp start={0} end={practoReviews} duration={2} separator="," />+
        </Heading>
        <Text fontSize="lg" fontWeight="semibold">
          Practo Reviews
        </Text>
      </VStack>
    </Grid>
  );
}

export default Stats;
