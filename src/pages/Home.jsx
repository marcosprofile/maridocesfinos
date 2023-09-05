import React from 'react';
import Showcase from '../components/Showcase';
import MyPhotos from '../components/MyPhotos';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Showcase />
      <MyPhotos />
      <AboutMe />
      <Contact />
    </>
  )
}

export default Home;
