import React from 'react';
import { motion } from 'framer-motion';

import {
  FlexContainer,
  PaddingContainer,
  Heading,
} from '../styles/Global.styled';

import {
  /* fadeInLeftVariant, */
  fadeInRightVariant,
} from '../utils/Variants';

const Contact = () => {
  return (
    <PaddingContainer
      top="8rem"
      bottom="8rem"
      left="240px"
      right="240px"
      responsive
      bgBlue
    >
      <FlexContainer
        as={motion.div}
        variants={fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        justify="center"
      >
        <Heading
          as="h1"
          size="h1"
          weight="bold"
        >
          CONTATO
        </Heading>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default Contact