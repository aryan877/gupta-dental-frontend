import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

function WhyChooseUs() {
  const showBlueBox = useBreakpointValue({ base: false, md: true });
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr']}
      textAlign="center"
      maxW="8xl"
      mx="auto"
      gap={showBlueBox ? 48 : 8}
      px={12}
      py={24}
    >
      {/* Left Div */}
      <Box position="relative">
        {showBlueBox && (
          <Box
            position="absolute"
            top={20}
            left={0}
            width="50%"
            height={600}
            backgroundColor="blue.500"
            zIndex={-1}
          />
        )}
        <Image
          src="./img/why-choose-us.jpeg"
          alt="Image"
          position={showBlueBox ? 'absolute' : 'static'}
          left={20}
          right={0}
          height={600}
          w="full"
          objectFit="cover"
        />
      </Box>

      {/* Right Div */}
      <Box textAlign="start" mr={8}>
        <Text fontSize="3xl" fontWeight="bold" mb={6}>
          Why Choose Us?
        </Text>
        <Text fontSize="xl" mb={6}>
          Experience exceptional dental care with Gupta Dental – your trusted
          choice for comprehensive and personalized oral health solutions
        </Text>
        <Flex alignItems="flex-start" fontSize="xl" mb={6}>
          <Image src="./svg/tick.svg" alt="Tick" boxSize={6} mr={4} />
          <Text fontWeight="semibold">
            World-class dental treatment by our best dentists
          </Text>
        </Flex>
        <Flex alignItems="flex-start" fontSize="xl" mb={6}>
          <Image src="./svg/tick.svg" alt="Tick" boxSize={6} mr={4} />
          <Text fontWeight="semibold">Hygienic and salubrious environment</Text>
        </Flex>

        <Flex alignItems="flex-start" fontSize="xl" mb={6}>
          <Image src="./svg/tick.svg" alt="Tick" boxSize={6} mr={4} />
          <Text fontWeight="semibold">
            Friendly staff, clean facility, and excellent customer service
          </Text>
        </Flex>
        <Flex alignItems="flex-start" fontSize="xl" mb={6}>
          <Image src="./svg/tick.svg" alt="Tick" boxSize={6} mr={4} />
          <Text fontWeight="semibold">
            Expertise in dental implants and other advanced techniques
          </Text>
        </Flex>
        <Flex alignItems="flex-start" fontSize="xl" mb={6}>
          <Image src="./svg/tick.svg" alt="Tick" boxSize={6} mr={4} />
          <Text fontWeight="semibold">
            Led by renowned dental surgeon with over 8 years of experience
          </Text>
        </Flex>
        <Button
          colorScheme="blue"
          borderRadius="0"
          fontSize="lg"
          p={8}
          size="md"
        >
          Book Appointment
        </Button>
      </Box>
    </Grid>
  );
}

export default WhyChooseUs;
