import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';

function ContactUs() {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr']}
      textAlign="center"
      maxW="8xl"
      mx="auto"
      gap={6}
      px={12}
      my={24}
    >
      {/* Left Div */}
      <Box borderWidth="1px" borderRadius={0} p={16}>
        <Flex direction="column" align="center" mb={2}>
          <Image src="./svg/clock.svg" mb={4} boxSize={24} />
          <Text fontWeight="bold" fontSize="2xl">
            Clinic Timings
          </Text>
        </Flex>
        <Box fontSize="xl">
          <Text>
            <strong>Tue – Sun:</strong> 9.30 AM to 1.30 PM, 4.30 PM to 8.30 PM
          </Text>
          <Text>
            <strong>Mon:</strong> 4.30 PM to 8.30 PM
          </Text>
        </Box>
      </Box>

      {/* Right Div */}
      <Box borderWidth="1px" borderRadius={0} p={16}>
        <Flex direction="column" align="center" mb={2}>
          <Image src="./svg/contact.svg" mb={4} boxSize={24} />
          <Text fontWeight="bold" fontSize="2xl">
            Contact Us
          </Text>
        </Flex>
        <Box fontSize="xl">
          <Text>
            <strong>Phone:</strong> +91 83779 90994
          </Text>

          <Text>
            <strong>Address:</strong> O-Block 99, Opp Ramlila Ground (Noida
            Stadium), Sector-12, Noida, Uttar Pradesh, India.
          </Text>
        </Box>
      </Box>
    </Grid>
  );
}

export default ContactUs;
