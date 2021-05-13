import React from 'react';
import './Card.css';

const Card = ( { card }) => {

  const { img, heading, description } = card;

  return (
    <div className="card">
      <div className="card__img" style={{ backgroundImage: `url(${img})`, flex: '0 0 300px'  }}></div>
      <div className="card__content">
        <h3>{ heading }</h3>
        <p>{ description }</p>
      </div>
    </div>
  )
}

export default Card;
