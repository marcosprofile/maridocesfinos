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
    >
      <Heading
        as="p"
        size="p"
        grey
      >
        &copy; Mary Doces Finos
      </Heading>
    </StyledFooter>
  )
}

export default Footer;