import React from 'react';

const Header = ({ image, title }) => {
  return (
    <header>
      <img src={image} alt="Header" />
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
