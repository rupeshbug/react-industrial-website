import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about__head">
        <h1>A group of productive enterprises that produce or supply Goods, Services, or Sources of Income</h1>
      </div>
      <div className="about__info">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, 
        sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor. Donec consequat 
        arcu et commodo interdum. Vivamus posuere lorem lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque orci purus, sodales in est quis, blandit sollicitudin est.</p>
      </div>
      <div className="about__theme">
        <h1>We produce or supply Goods, Services, or Sources</h1>
        <button className="contact__btn">contact us</button>
      </div>
    </div>
  )
}

export default About;
