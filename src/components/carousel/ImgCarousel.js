import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImgCarousel = ({ itemImgUrl }) => {
  return (
    <Carousel showArrows={true} dynamicHeight={true}>
      {itemImgUrl.map((image) => (
        <div key={image}>
          <img alt={image} src={image} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImgCarousel;
