import React from 'react';
// import { Link } from 'react-router-dom';
import Navigator from '../Navigator';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <Navigator />
    </header>
  );
};

export default Header;
