import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';

function ContactUs() {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr']}
      textAlign="center"
      maxW="7xl"
      mx="auto"
      gap={6}
      px={4}
      py={12}
    >
      {/* Left Div */}
      <Box
        borderRadius={0}
        padding="1px"
        backgroundImage="linear-gradient(180deg, rgba(211, 224, 255, 0), #d3e0ff)"
      >
        <Box opacity={1} h="full" bg="white" p={16}>
          <Flex direction="column" align="center" mb={2}>
            <Image src="./svg/clock.svg" mb={8} boxSize={24} />
            <Text fontWeight="bold" fontSize="2xl">
              Clinic Timings
            </Text>
          </Flex>
          <Box fontSize="lg">
            <Text>
              <strong>Tue – Sun:</strong> 9.30 AM to 1.30 PM, 4.30 PM to 8.30 PM
            </Text>
            <Text>
              <strong>Mon:</strong> 4.30 PM to 8.30 PM
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Right Div */}
      <Box
        borderRadius={0}
        padding="1px"
        backgroundImage="linear-gradient(180deg, rgba(211, 224, 255, 0), #d3e0ff)"
      >
        <Box opacity={1} h="full" bg="white" p={16}>
          <Flex direction="column" align="center" mb={2}>
            <Image src="./svg/contact.svg" mb={8} boxSize={24} />
            <Text fontWeight="bold" fontSize="2xl">
              Contact Us
            </Text>
          </Flex>
          <Box fontSize="lg">
            <Text>
              <strong>Phone:</strong> +91 83779 90994
            </Text>

            <Text>
              <strong>Location:</strong> O-Block 99, Opp Ramlila Ground (Noida
              Stadium), Sector-12, Noida, Uttar Pradesh, India.
            </Text>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default ContactUs;
