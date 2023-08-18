import React from 'react';

import {
  Heading,
  Image,
  StyledFooter,
} from '../styles/Global.styled';

import BottomImage from '../assets/bottom.png';

const Footer = () => {
  return (
    <StyledFooter
      width="100%"
      direction="column"
      align="center"
      gap="2rem"
      top="2rem"
      bgBlue
    >
      <Heading
        as="p"
        size="p"
      >
        &copy; Mary Doces Finos
      </Heading>
      <Image respBottom width="100%" height="300px" src={BottomImage} />
    </StyledFooter>
  )
}

export default Footer;