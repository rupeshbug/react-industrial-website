import React, { useState, useEffect } from 'react';
import NavbarLg from './NavbarLg/Navbar';
import NavbarSm from './NavbarSm/Navbar';

const Appbar = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleAppbar = () => {
    setWindowWidth(window.innerWidth);
  };
  
 useEffect(() => {
  window.addEventListener('resize', handleAppbar);
 }, []);

  return windowWidth > 760 ? <NavbarLg /> : <NavbarSm />
}

export default Appbar;
