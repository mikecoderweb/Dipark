import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { GlobalStyle } from './styles/GlobalStyle';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Features />
      <Partners />
      <Testimonials />
      <Courses /> 
      <ContactForm/>
      <Footer />
    </>
  );
};

export default App;
