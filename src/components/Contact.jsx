import React from 'react';
import { motion } from 'framer-motion';

import {
  FlexContainer,
  PaddingContainer,
  TextColor,
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
      bgBlue
    >
      <FlexContainer
        as={motion.div}
        variants={fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        justify="center"
      >
        <TextColor
          size="32px"
          weight="bold"
          fontTransform="uppercase"
        >
          Contato
        </TextColor>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default Contact