import React from 'react';
import Showcase from '../components/Showcase';
import MyPhotos from '../components/MyPhotos';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Showcase />
      <MyPhotos />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;
