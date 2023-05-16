import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

function OurDoctors() {
  const showBlueBox = useBreakpointValue({ base: false, md: true });
  return (
    <Grid
      templateColumns={['1fr', '1fr', '4fr 6fr']}
      textAlign="center"
      maxW="8xl"
      mx="auto"
      gap={showBlueBox ? 0 : 8}
      px={12}
      py={24}
    >
      {/* Left Div */}
      <Flex align="flex-end">
        <Image
          src="./img/why-choose-us.jpeg"
          alt="Image"
          w="full"
          height="full"
          objectFit="cover"
        />
      </Flex>

      {/* Right Div */}
      <Grid templateRows={['auto 1fr']} textAlign="center">
        <Box px={16} py={8} minH="0">
          <Text fontSize="3xl" fontWeight="bold" mb={6}>
            Meet Our Experts
          </Text>

          <Text fontSize="xl" mb={6}>
            Meet our team of experienced dental experts who are dedicated to
            providing high-quality care and personalized treatment options for
            all your dental needs
          </Text>
        </Box>
        <Box
          bg="blue.500"
          color="white"
          px={16}
          py={8}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text fontSize="2xl" fontWeight="bold" textAlign="start" mb={4}>
            Dr. Ankit Gupta, BDS, MDS
          </Text>
          <Text fontSize="xl" textAlign="start">
            Dr. Ankit Gupta, a highly skilled Orthodontist, specializes in
            advanced treatments like Invisible braces, Adult orthodontic
            treatment, Accelerated tooth movement, Lingual braces, and Clear
            aligners (Invisalign). With a focus on exceptional care and
            outstanding results, he creates personalized treatment plans for
            each patient. Experience Dr. Gupta's precise techniques, attention
            to detail, and commitment to patient satisfaction. Affordable
            treatment fees are based on individual malocclusion. Discover the
            transformative power of expert orthodontic care and achieve a
            confident smile.
            <Link
              href="/read-more"
              color="white"
              textDecoration="underline"
              fontWeight="bold"
              mt={4}
            >
              Read More
            </Link>
          </Text>
        </Box>
      </Grid>
    </Grid>
  );
}

export default OurDoctors;
