import React from 'react';
import { motion } from 'framer-motion';

import {
  FlexContainer,
  PaddingContainer,
  Paragraph,
  Title,
} from '../styles/Global.styled';

import MyProducts from '../components/MyProducts';

import { fadeInTopVariant } from '../utils/Variants';

const List = () => {
  return (
    <PaddingContainer
      top="3rem"
      bottom="8rem"
      left="240px"
      right="240px"
      bgWhite
    >
      <FlexContainer
        as={motion.div}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        align="center"
        direction="column"
        gap=".5rem"
      >
        <Title
          size="48px"
          weight="600"
          grey
        >
          Catálogo
        </Title>
        <Paragraph
          size="24px"
          grey
        >
          Para quaisquer eventos e pessoas queridas para você
        </Paragraph>
        <MyProducts />
      </FlexContainer>
    </PaddingContainer>
  )
}

export default List;
