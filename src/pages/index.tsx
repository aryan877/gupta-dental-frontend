import { HamburgerIcon } from '@chakra-ui/icons';
import {
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
  IconButton,
  Image as ChakraImage,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ContactUs from '../../components/ContactUs';
import HoverMenu from '../../components/HoverMenu';
import WhyChooseUs from '../../components/WhyChooseUs';
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="gray.50">
        <Flex
          as="nav"
          align="center"
          justify="center" // Center the navbar horizontally
          w="full"
          mx="auto"
          gap={6}
          px={12}
        >
          <Box
            display="flex"
            alignItems="center"
            fontWeight="bold"
            fontSize="lg"
          >
            <ChakraImage
              src="./img/logo.png"
              alt="Logo"
              h={12}
              my={4}
              objectFit="contain"
            />
          </Box>
          <Spacer />

          <Flex display={['none', 'none', 'flex']} alignItems="center">
            <HoverMenu
              label="Treatments"
              items={[
                'Braces & Aligners',
                'Teeth Cleaning and Polishing',
                'White Colored Fillings',
                'Laser Teeth Whitening',
                'Surgical Extraction/Impaction',
                'Complete and Partial Dentures',
                'Full Mouth Reconstruction',
                'Metal Free Crowns',
                'Root Canal Treatment',
                'Child Care Dentistry',
                'Dental Implants',
                'Surgical Extraction',
                'Metal Free Bridge',
                'Smile Makeover',
              ]}
            />
            <Divider
              orientation="vertical"
              height="20px"
              width="1px"
              bg="rgba(0,0,0,0.4)"
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
            <Divider
              orientation="vertical"
              height="20px"
              width="1px"
              bg="rgba(0,0,0,0.4)"
            />
            <HoverMenu label="About Us" items={[]} />
          </Flex>
          <Spacer />
          <Button
            colorScheme="blue"
            leftIcon={<FaCalendarAlt />}
            borderRadius="0"
            size="md"
          >
            Book Appointment
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
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <Image
          src="./img/display_0.jpg"
          alt="Carousel Item 1"
          h="600"
          objectFit="cover"
        />
        <Image
          src="./img/display_1.jpg"
          alt="Carousel Item 2"
          h="600"
          objectFit="cover"
        />
      </Carousel>
      <ContactUs />
      <WhyChooseUs />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <Box mx="2" my="4">
                Menu Item 1
              </Box>
              <Box mx="2" my="4">
                Menu Item 2
              </Box>
              <Box mx="2" my="4">
                Menu Item 3
              </Box>
              <Box mx="2" my="4">
                Menu Item 4
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
