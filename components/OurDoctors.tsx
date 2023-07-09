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
import React, { useState } from 'react';
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from 'react-icons/hi2';

const doctorsData = [
  {
    name: 'Dr. Ankit Gupta',
    description:
      'Dr. Ankit Gupta specializes in advanced orthodontic treatments, including invisible braces, adult orthodontic treatment, accelerated tooth movement, lingual braces, and Invisalign. Experience his precise techniques and achieve outstanding results.',
    image: 'dr_ankit.webp',
  },
  {
    name: 'Dr. Akanksha Gupta',
    description:
      "Dr. Akanksha Gupta is a root canal specialist and cosmetic dentist. She holds a master's degree in Oral Medicine & Radiology and is a certified endodontist. With over 7 years of experience, Dr. Gupta specializes in root canal therapy and full mouth rehabilitation cases.",
    image: 'dr_akanksha.webp',
  },
  {
    name: 'Dr. Ankita Maniya',
    description:
      'Dr. Ankita Maniya is a specialist in root canal therapy and full mouth rehabilitation cases. With over 5 years of experience, she has worked alongside Dr. Guptas at the center, focusing on providing high-quality dental care.',
    image: 'dr_ankita.webp',
  },
];

function OurDoctors() {
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState(0);
  const MdWidth = useBreakpointValue({ base: false, md: true });

  const handlePrevDoctor = () => {
    setCurrentDoctorIndex((prevIndex) =>
      prevIndex === 0 ? doctorsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextDoctor = () => {
    setCurrentDoctorIndex((prevIndex) =>
      prevIndex === doctorsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentDoctor = doctorsData[currentDoctorIndex];

  return (
    <Grid
      templateColumns={['1fr', '1fr', '4fr 6fr']}
      textAlign="center"
      maxW="7xl"
      mx="auto"
      gap={MdWidth ? 0 : 8}
      px={4}
      py={12}
    >
      {/* Left Div */}
      <Flex align="flex-end">
        <Image
          src={`./img/doctors/${currentDoctor.image}`}
          alt="Image"
          w="full"
          h={MdWidth ? 700 : 400}
          objectFit="cover"
        />
      </Flex>

      {/* Right Div */}
      <Grid templateRows={['auto 1fr']}>
        <Box px={MdWidth ? 16 : 0} py={MdWidth ? 8 : 4} minH="0">
          <Text fontSize="4xl" textAlign="start" fontWeight="bold" mb={6}>
            Meet Our Experts
          </Text>

          <Text fontSize="lg" textAlign="start" mb={6}>
            Meet our team of experienced dental experts who are dedicated to
            providing high-quality care and personalized treatment options for
            all your dental needs
          </Text>
        </Box>
        <Box
          bg="blue.500"
          color="white"
          px={MdWidth ? 16 : 8}
          py={8}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text fontSize="3xl" textAlign="start" fontWeight="semibold">
            {currentDoctor.name}
          </Text>
          <Text fontSize="lg" textAlign="start">
            {currentDoctor.description}
          </Text>
          <Link
            href="/read-more"
            color="white"
            textDecoration="underline"
            fontWeight="bold"
            mb={8}
          >
            Read More
          </Link>
          <Flex justify="space-between" mt={4}>
            {/* left arrow */}

            <Button
              size="lg"
              colorScheme="transparent"
              borderRadius="0"
              transition="width 0.3s ease-out"
              onClick={handlePrevDoctor}
              pos="relative"
              _hover={{
                '& > div': { width: '100%' },
              }}
            >
              <Box
                width="0%"
                height="100%"
                left="0"
                pos="absolute"
                bg="linear-gradient(to right, rgba(255,255,255,0.4) 50%, transparent 50%)"
                transition="width 0.3s ease-out"
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              />
              <Image src="./img/arrows/left.png" alt="Left Arrow" />
            </Button>
            {/* right arrow */}
            <Button
              size="lg"
              colorScheme="transparent"
              borderRadius="0"
              transition="width 0.3s ease-out"
              onClick={handleNextDoctor}
              pos="relative"
              _hover={{
                '& > div': { width: '100%' },
              }}
            >
              <Image src="./img/arrows/right.png" alt="Right Arrow" />
              <Box
                width="0%"
                height="100%"
                right="0"
                pos="absolute"
                bg="linear-gradient(to left, rgba(255,255,255,0.4) 50%, transparent 50%)"
                transition="width 0.3s ease-out"
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              />
            </Button>
          </Flex>
        </Box>
      </Grid>
    </Grid>
  );
}

export default OurDoctors;
