import React, { useState } from 'react';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default () => {
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div
        style={{
          height: '300px',
          textAlign: 'center',
          border: '1px solid red',
        }}
      >
        Item 1
      </div>
      <div
        style={{
          height: '300px',
          textAlign: 'center',
          border: '1px solid red',
        }}
      >
        Item 2
      </div>
      <div
        style={{
          height: '300px',
          textAlign: 'center',
          border: '1px solid red',
        }}
      >
        Item 3
      </div>
      <div
        style={{
          height: '300px',
          textAlign: 'center',
          border: '1px solid red',
        }}
      >
        Item 4
      </div>
    </Carousel>
  );
};
