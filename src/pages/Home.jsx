import React from 'react';
import Showcase from '../components/Showcase';
import MyPhotos from '../components/MyPhotos';
import Contact from '../components/Contact';
import About from '../components/About';
import Information from '../components/Information';
import Tasting from '../components/Tasting';

const Home = () => {
  return (
    <>
      <Showcase />
      <MyPhotos />
      <About />
      <Information />
      <Tasting />
      <Contact />
    </>
  )
}

export default Home;
