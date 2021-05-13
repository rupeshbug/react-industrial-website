import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <nav className="navbarSm">
        <div className="navbarSm__brand">
          <h1>INDUSRTY <span>INC</span></h1>
        </div>
        <div className="ham__menu" onClick={() => {
          setDrawer(prevState => !prevState)
        }}>
          { drawer ? <i className="fas fa-times fa-2x"></i> : 
            <i className="fas fa-bars fa-2x"></i> }
        </div>
        <ul className="navbarSm__items" style={{ opacity: drawer ?
            '1' : '0' }}>
          <li className="navSm__link"><a className="link" href="/home">Home</a></li>
          <li className="navSm__link"><a className="link" href="/home">About Us</a></li>
          <li className="navSm__link"><a className="link" href="/home">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
