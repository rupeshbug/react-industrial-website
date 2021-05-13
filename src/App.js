import React from 'react';
import './App.css';
import Appbar from './components/Appbar/Appbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClientTestimonials from './components/ClientTestimonials/ClientTestimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Appbar />
      <Home />
      <About />
      <ClientTestimonials />
      <Contact />
      <Footer />
    </div>
  )
};

export default App;

