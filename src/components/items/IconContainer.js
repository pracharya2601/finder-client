import React from 'react';

const IconContainer = (props) => {
  const { icon, value, itemcard } = props;

  const iconContainer = {
    display: 'flex',
    padding: '10px',
    margin: 'auto',
  };
  const itemCard = {
    container: {
      ...iconContainer,
      background: 'rgb(186, 184, 184, 0.7)',
      margin: '0 0 5px 0',
      width: '28px',
      height: '24px',
      padding: '5px',
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px',
    },
    image: {
      margin: 'auto',
      height: '15px',
      width: '15px',
    },
    value: {
      margin: 'auto',
      fontSize: '12px',
    },
  };
  const singleCard = {
    container: {
      ...iconContainer,
      background: 'lightgrey',
      width: '50px',
      height: '50px',
      padding: '10px',
      borderRadius: '5px',
    },
    image: {
      margin: 'auto',
      height: '20px',
      width: '20px',
    },
    value: {
      margin: 'auto',
    },
  };
  return (
    <div style={itemcard ? itemCard.container : singleCard.container}>
      <img style={itemcard ? itemCard.image : singleCard.image} src={icon} />
      <h4 style={itemcard ? itemCard.value : singleCard.value}>
        {value ? value : 0}
      </h4>
    </div>
  );
};

export default IconContainer;
