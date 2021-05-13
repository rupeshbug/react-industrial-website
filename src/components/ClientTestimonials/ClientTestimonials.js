import React from 'react';
import './ClientTestimonials.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import client1 from '../../images/client1.jpg';
import client2 from '../../images/client2.jpg';

const ClientTestimonials = () => {
  return (
    <div>
      <h1 className="head">Client's Testimonials</h1>
      <Slide easing="ease">
        <div className="each-slides">
          <div className="client__info">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
              mauris pellentesque, vestibulum quam vel, bibendum mauris pellentesque, 
              vestibulum quam vel, bibendum mauris pellentesque, vestibulum quam vel, bibendum lectus 
              mauris pellentesque, vestibulum quam vel, bibendum lectus.
             </span>
             <div className="client">
               <img src={client1} alt="" />
               <h4>Elon Musk</h4>
             </div>
          </div>
        </div>

        <div className="each-slides">
          <div className="client__info">
             <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
              mauris pellentesque, vestibulum quam vel, bibendum mauris pellentesque, 
              vestibulum quam vel, bibendum mauris pellentesque, vestibulum quam vel, bibendum lectus 
              mauris pellentesque, vestibulum quam vel, bibendum lectus.
             </span>
             <div className="client">
               <img src={client2} alt="" />
               <h4>Jeff Bezos</h4>
             </div>
          </div>
        </div>

      </Slide>
  </div>
  )
}

export default ClientTestimonials;
