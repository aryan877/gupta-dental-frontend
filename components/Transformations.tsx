import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

const smileGalleryImages = [
  '/img/smile_gallery/patient_1.png',
  '/img/smile_gallery/patient_1.png',
  '/img/smile_gallery/patient_1.png',
  '/img/smile_gallery/patient_1.png',
];

function OurServices() {
  return (
    <Box textAlign="center" px={4} py={12} maxW="7xl" mx="auto">
      <Text fontSize="4xl" fontWeight="bold" mb={12}>
        Smile Gallery
      </Text>
      <Flex direction="row" justify="center" align="center" wrap="wrap" gap={8}>
        {smileGalleryImages.slice(0, 4).map((image, index) => (
          <Box
            key={index}
            w="300px"
            h="200px"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
          >
            <Image
              src={image}
              alt={`Smile ${index + 1}`}
              boxSize="100%"
              objectFit="cover"
            />
          </Box>
        ))}
      </Flex>
      <Button borderRadius={0} colorScheme="blue" mt={8}>
        See More
      </Button>
    </Box>
  );
}

export default OurServices;
