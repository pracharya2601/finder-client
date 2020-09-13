import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

class ItemsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 599, itemsToShow: 2, itemsToScroll: 2 },
      { width: 959, itemsToShow: 3, itemsToScroll: 2 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 3 },
      { width: 1450, itemsToShow: 5, itemsToScrool: 4 },
      { width: 1750, itemsToShow: 6, itemsToScrool: 5 },
    ];
  }
  myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? null : null;
    return <>{pointer}</>;
  };
  render() {
    const { children } = this.props;
    return (
      <Carousel
        breakPoints={this.breakPoints}
        renderArrow={false}
        focusOnSelect={false}
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
        renderArrow={this.myArrow}
        itemPadding={[5, 2]}
        style={{ boxSizing: 'border-box' }}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <div style={style}>
              {pages.map((page) => {
                const isActivePage = activePage === page;
                const itemStyle = isActivePage ? active : inactive;
                return (
                  <button
                    key={page}
                    onClick={() => onClick(page)}
                    active={active}
                    style={itemStyle}
                  />
                );
              })}
            </div>
          );
        }}
      >
        {children}
      </Carousel>
    );
  }
}
const style = {
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  overflow: 'hide',
};
const active = {
  height: '20px',
  width: '20px',
  background: '#4b62c9',
  border: '3px solid #4b62c9',
  borderRadius: '5px',
  margin: '2px',
};

const inactive = {
  height: '20px',
  width: '20px',
  margin: '2px',
  backgroundColor: '#cfd8ff',
  border: '3px solid #cfd8ff',
  borderRadius: '5px',
  '&:hover': {
    background: '#efefef',
  },
};

export default ItemsCarousel;
