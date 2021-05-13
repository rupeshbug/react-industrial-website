import React from 'react';
import './IntroServices.css';
import cogwheel from '../../../images/cogwheel.png';
import helmet from '../../../images/helmet.png';
import windEngine from '../../../images/wind-engine.png';
import pollution from '../../../images/pollution.png';
import pumpJack from '../../../images/pumpjack.png';
import lightBulb from '../../../images/light-bulb.png';

const IntroServices = () => {
  return (
    <div className="intro">

      <div className="intro__content">
        <div>
          <img src={cogwheel} alt="cogwheel" />
          <h4>Mechanical Engineering</h4>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est.</p>
      </div>

      <div className="intro__content">
        <div>
          <img src={helmet} alt="helmet" />
          <h4>Profesional Workers</h4>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est.</p>
      </div>

      <div className="intro__content">
        <div>
          <img src={windEngine} alt="wid=nd-engine" />
          <h4>Green Energy</h4>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est.</p>
      </div>

      <div className="intro__content">
        <div>
          <img src={pollution} alt="pollution" />
          <h4>Power Engineering</h4>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est.</p>
      </div>

      <div className="intro__content">
        <div>
          <img src={pumpJack} alt="pump-jack" />
          <h4>Oil & Lubricants</h4>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est.</p>
      </div>

      <div className="intro__content">
        <div>
          <img src={lightBulb} alt="light-bulb" />
          <h4>Power & Energy</h4>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est.</p>
      </div>

    </div>
  )
}

export default IntroServices;
