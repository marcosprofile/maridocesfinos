import React from 'react';
import { motion } from 'framer-motion';

import {
  FlexContainer,
  Heading,
  PaddingContainer,
} from '../styles/Global.styled';

import MyProducts from '../components/MyProducts';

import { fadeInTopVariant } from '../utils/Variants';

const List = () => {
  return (
    <PaddingContainer
      top="3rem"
      bottom="2rem"
      left="1rem"
      right="1rem"
      responsive
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
        <Heading
          as="h1"
          size="h1"
          grey
        >
          Catálogo
        </Heading>
        <Heading
          as="h4"
          size="h4"
          grey
        >
          Esse  é o cardápio com os doces mais pedidos por aqui
        </Heading>
        <MyProducts />
      </FlexContainer>
    </PaddingContainer>
  )
}

export default List;
