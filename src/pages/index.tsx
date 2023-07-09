import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselComponent from '../../components/Carousel';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import HoverMenu from '../../components/HoverMenu';
import Navbar from '../../components/Navbar';
import OurDoctors from '../../components/OurDoctors';
import OurServices from '../../components/Services';
import Stats from '../../components/Stats';
import Transformations from '../../components/Transformations';
import WhyChooseUs from '../../components/WhyChooseUs';
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Navbar />
      <CarouselComponent />
      <Stats />
      <ContactUs />
      <WhyChooseUs />
      <OurServices />
      <Transformations />
      <OurDoctors />
      <Footer />
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
