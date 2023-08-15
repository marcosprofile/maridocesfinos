import React from 'react';
import Showcase from '../components/Showcase';
import Photos from '../components/Photos';
import SendImage from '../components/SendImage';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Showcase />
      <Photos />
      <SendImage />
      <AboutMe />
      <Contact />
    </>
  )
}

export default Home;
