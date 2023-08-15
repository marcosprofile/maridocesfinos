import React from 'react';
import { motion } from 'framer-motion';

import {
  FlexContainer,
  Heading,
  PaddingContainer,
} from '../styles/Global.styled';

import {
  fadeInLeftVariant,
  /* fadeInRightVariant, */
} from '../utils/Variants';

const AboutMe = () => {
  return (
    <PaddingContainer
      top="8rem"
      bottom="8rem"
      left="240px"
      right="240px"
      responsive
    >
      <FlexContainer
        as={motion.div}
        variants={fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
        justify="center"
      >
        <Heading
          as="h1"
          size="h1"
          weight="bold"
          grey
        >
          SOBRE MIM
        </Heading>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default AboutMe
