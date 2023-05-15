import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';

function WhyChooseUs() {
  return (
    <Grid
      templateColumns={['1fr', '2fr', '1fr 2fr']}
      textAlign="center"
      maxW="8xl"
      mx="auto"
      gap={48}
      px={12}
      my={24}
    >
      {/* Left Div */}
      <Box position="relative">
        <Box
          position="absolute"
          top={20}
          left={0}
          width="50%"
          height="60vh"
          backgroundColor="blue.500"
          zIndex={-1}
        />
        <Image
          src="./img/why-choose-us.jpg"
          alt="Image"
          position="absolute"
          left={20}
          right={0}
          w="full"
          objectFit="cover"
          height="60vh"
        />
      </Box>

      {/* Right Div */}
      <Box textAlign="start">
        <Text fontWeight="bold" fontSize="4xl" mb={4}>
          Why Choose Us?
        </Text>
        <Box fontSize="xl">
          <Text>
            Our team consists of highly experienced professionals in the
            industry.
          </Text>
        </Box>
      </Box>
    </Grid>
  );
}

export default WhyChooseUs;
