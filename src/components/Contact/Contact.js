import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__info">
        <div className="address">
          <div className="address__head">
            <i className="fas fa-map-marker-alt fa-2x"></i>
            <h4>Address</h4>
          </div>
          <p>Main St no 23 Kathmandu, Nepal</p>
        </div>
        <div className="phone">
          <div className="phone__head">
            <i className="fas fa-phone fa-2x"></i>
            <h4>Contact Us</h4>
          </div>
          <p>9800000000</p>
        </div>
        <div className="support">
          <div className="support__head">
            <i className="fas fa-envelope fa-2x"></i>
            <h4>General Support</h4>
          </div>
          <p>industrialinc@example.com</p>
        </div>
      </div>
      <div className="contactUs">
        <h1>Contact Us</h1>
        <div className="name">
          <label>Enter Your name</label>
          <input type="text" />
        </div>
        <div className="email">
          <label>Enter Your Email</label>
          <input type='email' />
        </div>
        <div className="phoneNumber">
          <label>Enter Phone Number</label>
          <input type='number' />
        </div>
        <div className="message">
          <label>Message</label>
          <textarea></textarea>
        </div>
        <button className="send__btn">submit</button>
      </div>
    </div>
  )
}

export default Contact;
