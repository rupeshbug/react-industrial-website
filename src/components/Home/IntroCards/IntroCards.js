import React from 'react';
import './IntroCards.css';
import card1 from '../../../images/card1.jpg';
import card2 from '../../../images/card2.jpg';
import card3 from '../../../images/card3.jpg';
import Card from './Card/Card';

const cards = [
  {
    id: 1,
    img: card1,
    heading: 'Chemical Research',
    description: 'Lorem ipsum dolor sit amet, consectetur adipi-scing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor.'
  },
  {
    id: 2,
    img: card2,
    heading: 'Engineering',
    description: 'Lorem ipsum dolor sit amet, consectetur adipi-scing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor.'
  },
  {
    id: 3,
    img: card3,
    heading: 'Manufacturing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipi-scing elit. Quisque orci purus, sodales in est quis, blandit sollicitudin est. Nam ornare ipsum ac accumsan auctor.'
  }
];

const IntroCards = () => {
  return (
    <div className="card__container">
      { cards.map(card => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  )
}

export default IntroCards;
