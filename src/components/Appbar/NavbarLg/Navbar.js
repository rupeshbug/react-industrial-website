import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav__brand">
        <h1>INDUSTRY <span>INC</span></h1>
      </div>
      <ul className="nav__items">
        <li className="nav__link"><a className="link" href="/home">Home</a></li>
        <li className="nav__link"><a className="link" href="/home">About Us</a></li>
        <li className="nav__link"><a className="link" href="/home">Contact</a></li>
      </ul>
      <div className="navInfo">
        <div className="navInfo__contact">
        <i className="fas fa-phone-alt fa-2x"></i>
          <div>
            <p>9800000000</p>
            <p>contact@industryinc.com</p>
          </div>
        </div>
        <div className="navInfo__address">
          <i className="fas fa-map-marker-alt fa-2x"></i>
          <div>
            <p>Main St, no 23</p>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
      <div className="nav__menu">
        <i style={{color: '#fafafa'}} className="fas fa-bars fa-2x"></i>
      </div>
    </nav>
  )
}

export default Navbar;
