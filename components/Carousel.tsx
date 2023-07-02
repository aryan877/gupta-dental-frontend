import { Box, Image } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CarouselComponent() {
  return (
    <Box>
      <Carousel interval={3000}>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="./img/display_0.jpeg"
            alt="Carousel Item 1"
            style={{ height: '540px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="./img/display_1.jpeg"
            alt="Carousel Item 2"
            style={{ height: '540px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="./img/display_2.jpeg"
            alt="Carousel Item 2"
            style={{ height: '540px', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>
    </Box>
  );
}

export default CarouselComponent;
