import React from 'react';
import './MenuIcon.css';

const MenuIcon = (props) => {
  return (
    <button className="toggle_button">
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
    </button>
  );
};

export default MenuIcon;
