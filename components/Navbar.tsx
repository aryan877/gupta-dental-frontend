import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
  useDisclosure,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import HoverMenu from './HoverMenu';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan1140] = useMediaQuery('(min-width: 1140px)');
  const [isLargerThan744] = useMediaQuery('(min-width: 744px)');
  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent zIndex={99999}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start" w="full">
              <Accordion allowToggle w="full">
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Home
                    </Box>
                  </AccordionButton>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Treatments
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel fontWeight="bold">
                    <VStack spacing={2} align="start">
                      <Link href="#">Braces & Aligners</Link>
                      <Link href="#">Teeth Cleaning</Link>
                      <Link href="#">Dental Fillings</Link>
                      {/* Add other treatment links here */}
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Patient Information
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel fontWeight="bold">
                    <VStack spacing={2} align="start">
                      <Link href="#">Self-Ligating Braces</Link>
                      <Link href="#">Wisdom Tooth Problems</Link>
                      <Link href="#">Undergoing Root Canal Treatment</Link>
                      {/* Add other patient information links here */}
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      About Us
                    </Box>
                  </AccordionButton>
                </AccordionItem>
              </Accordion>
              {/* <Link href="tel:123-456-7890">Call</Link> */}
              <Button
                colorScheme="blue"
                leftIcon={<FaCalendarAlt />}
                borderRadius="0"
                fontSize="lg"
                w="full"
              >
                Appointment
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box bg="gray.50" pos="fixed" top="0" zIndex={99} w="full">
        <Box as="nav" w="full" bg="blue.500">
          <Flex
            justify="space-between"
            maxW="8xl"
            mx="auto"
            px={6}
            w="full"
            py={2}
            align="center" // Center the content vertically
          >
            <Text color="white" fontSize="sm" mb={0}>
              Your smile, our priority.
            </Text>
            <HStack gap={8}>
              {isLargerThan744 && (
                <Text color="white" mb={0} fontSize="sm">
                  Email: braces.guptadental@gmail.com
                </Text>
              )}
              <Text color="white" fontSize="sm" mb={0}>
                Call: +91 83779 90994
              </Text>
            </HStack>
          </Flex>
        </Box>

        <Flex
          as="nav"
          align="center"
          // opacity={0.9}
          maxW="8xl"
          justify="center" // Center the navbar horizontally
          w="full"
          mx="auto"
          gap={6}
          px={6}
        >
          <Box display="flex" alignItems="center" fontSize="lg">
            <Image
              src="./img/CLINIC_LOGO.svg"
              alt="Logo"
              h={20}
              my={0}
              objectFit="contain"
            />
            <Box
              mt={4}
              ml={4}
              alignItems="start"
              display="flex"
              flexDirection="column"
            >
              <Text fontSize="md" fontWeight="bold">
                Dr. Gupta's
              </Text>
              <Text fontSize="xs" fontWeight="bold" mt={-4}>
                Dental Clinic & Orthodontic Centre
              </Text>
            </Box>
          </Box>

          <Spacer />

          {/* not visible below 1200px */}
          {isLargerThan1140 && (
            <Flex display="flex" alignItems="center">
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
          )}

          <Spacer />
          {isLargerThan1140 && (
            <Button
              colorScheme="blue"
              leftIcon={<FaCalendarAlt />}
              borderRadius="0"
              fontSize="lg"
              p={8}
            >
              Appointment
            </Button>
          )}
          {!isLargerThan1140 && (
            <>
              <IconButton
                icon={<HamburgerIcon fontSize="2xl" />}
                variant="unstyled"
                aria-label="Open menu"
                onClick={onOpen}
              />
            </>
          )}
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
