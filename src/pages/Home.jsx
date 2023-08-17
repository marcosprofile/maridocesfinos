import React from 'react';
import Showcase from '../components/Showcase';
import MyPhotos from '../components/MyPhotos';
import SendImage from '../components/SendImage';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Showcase />
      <MyPhotos />
      <SendImage />
      <AboutMe />
      <Contact />
    </>
  )
}

export default Home;
