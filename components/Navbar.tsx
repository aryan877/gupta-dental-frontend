import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Image,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import HoverMenu from './HoverMenu';
function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg="gray.50" pos="fixed" top="0" h={20} zIndex={9999} w="full">
      <Flex
        as="nav"
        align="center"
        maxW="8xl"
        justify="center" // Center the navbar horizontally
        w="full"
        mx="auto"
        gap={6}
        px={8}
      >
        <Box display="flex" alignItems="center" fontWeight="bold" fontSize="lg">
          <Image
            src="./img/logo.png"
            alt="Logo"
            h={12}
            my={4}
            objectFit="contain"
          />
        </Box>
        <Spacer />

        <Flex display={['none', 'none', 'flex']} alignItems="center">
          <HoverMenu label="Home" items={[]} />
          <HoverMenu
            label="Treatments"
            items={[
              'Braces & Aligners',
              'Teeth Cleaning',
              'Dental Fillings',
              'Laser Teeth Whitening',
              'Surgical Extraction',
              'Dentures',
              'Full Mouth Reconstruction',
              'Root Canal Treatment',
              'Child Dentistry',
              'Dental Implants',
              'Bridge & Crown',
              'Wisdom Teeth Removal',
              'Smile Makeover',
            ]}
          />
          <HoverMenu
            label="Patient Information"
            items={[
              'Self-Ligating Braces',
              'Wisdom Tooth Problems',
              'Undergoing Root Canal Treatment',
              'Undergoing Orthodontic Treatment',
              'Wearing Dentures',
              'Bad Breath',
              'Post Surgical Instructions',
            ]}
          />

          <HoverMenu label="About Us" items={[]} />

          <a href="tel:123-456-7890">
            {' '}
            <HoverMenu color="blue.500" label="Call" items={[]} />
          </a>
        </Flex>
        <Spacer />
        <Button
          colorScheme="blue"
          leftIcon={<FaCalendarAlt />}
          borderRadius="0"
          fontSize="lg"
          p={8}
          size="md"
        >
          Appointment
        </Button>
        <IconButton
          icon={<HamburgerIcon />}
          display={['flex', 'flex', 'none']}
          variant="unstyled"
          aria-label="Open menu"
          onClick={onOpen}
        />
      </Flex>
    </Box>
  );
}

export default Navbar;
