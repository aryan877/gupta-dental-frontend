import { Box, Grid, Image, Text } from '@chakra-ui/react';

const services = [
  { name: 'Braces & Aligners', icon: './services/1.svg' },
  { name: 'Teeth Cleaning', icon: './services/2.svg' },
  { name: 'Dental Fillings', icon: './services/3.svg' },
  { name: 'Laser Teeth Whitening', icon: './services/4.svg' },
  { name: 'Surgical Extraction', icon: './services/5.svg' },
  { name: 'Dentures', icon: './services/6.svg' },
  { name: 'Full Mouth Reconstruction', icon: './services/7.svg' },
  { name: 'Root Canal Treatment', icon: './services/8.svg' },
  { name: 'Child Dentistry', icon: './services/9.svg' },
  { name: 'Dental Implants', icon: './services/10.svg' },
  { name: 'Bridge & Crown', icon: './services/11.svg' },
  { name: 'Wisdom Teeth Removal', icon: './services/12.svg' },
  { name: 'Smile Makeover', icon: './services/13.svg' },
];

function OurServices() {
  return (
    <Box textAlign="center" px={4} py={24} maxW="8xl" mx="auto" bg="blue.100">
      <Text fontSize="4xl" fontWeight="bold" mb={12}>
        Treatment For You
      </Text>
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
          'repeat(5, 1fr)',
          'repeat(6, 1fr)',
        ]}
        gap={8}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            cursor="pointer"
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            p={4}
            color="black"
            boxShadow="md"
            transition="background-color 0.3s"
            bg="white"
            _hover={{
              backgroundColor: 'blue.500',
              color: 'white',
              boxShadow: '0 0 4px #32B2FF',
            }}
          >
            <Box
              display="flex"
              p={4}
              alignItems="center"
              justifyContent="center"
              borderRadius="50%"
              bg="white"
            >
              <Image src={service.icon} alt={service.name} boxSize="6rem" />
            </Box>

            <Text mt={4} fontSize="lg" fontWeight="bold">
              {service.name}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default OurServices;
