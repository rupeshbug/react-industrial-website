import React from 'react';
import './CarouselHome.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import slide1 from '../../../images/slide1.jpg';
import slide2 from '../../../images/slide2.jpg';
import slide3 from '../../../images/slide3.jpg';

const slideImages = [
  slide1, slide2, slide3
];

const CarouselHome = () => {
  return (
    <div>
      <Slide easing="ease" style={{ height:'100vh', opacity: '10' }}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`,height:'75vh'}}>
            <span className="slide__contents">You will be always aware of all business and financial news and stay informed with investment tips,
             market predictions, business advice and guides.</span>
             <button className="carousel__btn">Read More</button>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`,height:'75vh'}}>
            <span className="slide__contents">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
             mauris pellentesque, vestibulum quam vel, bibendum lectus.</span>
             <button className="carousel__btn">Read More</button>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`,height:'75vh'}}>
            <span className="slide__contents">You will be always aware of all business and financial news and stay informed with investment tips,
             market predictions, business advice and guides.</span>
             <button className="carousel__btn">Read More</button>
          </div>
        </div>
      </Slide>
  </div>
  )
}

export default CarouselHome;
