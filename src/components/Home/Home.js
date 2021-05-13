import React from 'react';
import CarouselHome from './CarouselHome/CarouselHome';
import IntroServices from '../Home/IntroServices/IntroServices';
import IntroCards from '../Home/IntroCards/IntroCards'

const Home = () => {
  return (
    <>
      <CarouselHome />
      <IntroServices />
      <IntroCards />
    </>
  )
}

export default Home;
