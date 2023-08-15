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

const Photos = () => {
  return (
    <PaddingContainer
      top="8rem"
      bottom="8rem"
      left="240px"
      right="240px"
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
          grey
          fontTransform="uppercase"
        >
          Fotos
        </TextColor>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default Photos