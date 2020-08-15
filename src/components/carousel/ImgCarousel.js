import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImgCarousel = ({ placeImgUrl }) => {
  return (
    <Carousel showArrows={true} dynamicHeight={true}>
      {placeImgUrl.map((image) => (
        <div key="image" style={{ height: '450', padding: '20' }}>
          <img alt={image} src={image} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImgCarousel;
