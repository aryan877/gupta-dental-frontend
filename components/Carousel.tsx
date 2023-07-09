import { Box, Image } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CarouselComponent() {
  const carouselItems = [
    {
      src: './img/carousel/display_0.webp',
      alt: 'Carousel Item 1',
    },
    {
      src: './img/carousel/display_1.webp',
      alt: 'Carousel Item 2',
    },
    {
      src: './img/carousel/display_2.webp',
      alt: 'Carousel Item 3',
    },
  ];

  return (
    <Box>
      <Carousel interval={3000}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <Image
              className="d-block w-100"
              src={item.src}
              alt={item.alt}
              style={{ height: '80vh', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
}

export default CarouselComponent;
