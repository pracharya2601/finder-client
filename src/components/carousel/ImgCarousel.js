import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImgCarousel = ({ itemImgUrl }) => {
  const onClick = (event) => {
    openInNewTab(event.currentTarget.dataset.div_id);
    console.log(event.currentTarget.dataset.div_id);
  };
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Carousel showArrows={true} dynamicHeight={false} target="_/blank">
      {itemImgUrl.map((image) => (
        <div
          key={image}
          style={{ height: '400px', background: 'white' }}
          data-div_id={image}
          onClick={onClick}
        >
          <img
            alt={image}
            src={image}
            height="100%"
            style={{ height: '100%', objectFit: 'contain' }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImgCarousel;
