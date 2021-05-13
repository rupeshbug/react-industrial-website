import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer__info">
        <h1>INDUSTRY <span>INC</span></h1>
        <p>Lorem ipsum dolor sit amet, consec-tetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat arcu et commodo interdum.</p>
        <div className="footerInfo__icons">
          <a href="http://www.facebook.com"><i className="fab fa-facebook fa-2x"></i></a>
          <a href="http://www.twitter.com"><i className="fab fa-twitter fa-2x"></i></a>
          <a href="http://www.instagram.com"><i className="fab fa-instagram fa-2x"></i></a>
        </div>
      </div>
      <div className="footer__resources">
        <h2>Useful Resources</h2>
        <ul>
          <li className="list"><a className="footer__link" href="/">Jobs vacancies</a></li>
          <li className="list"><a className="footer__link" href="/">Client Testimonials</a></li>
          <li className="list"><a className="footer__link" href="/">Green Energy</a></li>
          <li className="list"><a className="footer__link" href="/">Chemical Research</a></li>
          <li className="list"><a className="footer__link" href="/">Oil Extractions</a></li>
        </ul>
      </div>
      <div className="footer__solutions">
        <h2>Our Solutions</h2>
        <ul>
          <li className="list"><a className="footer__link" href="/">Metal Industry</a></li>
          <li className="list"><a className="footer__link" href="/">Agricultural Engineering</a></li>
          <li className="list"><a className="footer__link" href="/">Green Energy</a></li>
          <li className="list"><a className="footer__link" href="/">Chemical Research</a></li>
          <li className="list"><a className="footer__link" href="/">Oil Extractions</a></li>
        </ul>
      </div>
    </div>
    <div className="footer__copyright">
      Copyright ©2021 All rights reserved | This template is made with
      <i className="fas fa-heart loveIcon"></i> using ReactJS and CSS
    </div>
    </>
  )
}

export default Footer;
