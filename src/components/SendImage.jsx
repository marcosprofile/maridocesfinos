import React from 'react';
import { motion } from 'framer-motion';

import {
  FlexContainer,
  PaddingContainer,
  TextColor,
} from '../styles/Global.styled';

import {
  fadeInTopVariant,
  /* fadeInRightVariant, */
} from '../utils/Variants';

const SendImage = () => {
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
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        justify="center"
      >
        <TextColor
          size="32px"
          weight="bold"
          fontTransform="uppercase"
        >
          Enviar foto
        </TextColor>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default SendImage
