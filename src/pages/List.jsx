import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
  FlexContainer,
  Heading,
  PaddingContainer,
  LinkContainer,
} from '../styles/Global.styled';

// BsArrowLeftCircle
import { BsArrowLeftCircle } from "react-icons/bs";

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
        <Link className="link" to="/">
          <LinkContainer
            top="1.5rem"
            bottom="1.5rem"
            left="2.5rem"
            right="2.5rem"
            radius=".5rem"
            justify="center"
            align="center"
            gap=".5rem"
            secondary
            fixed
          >
            <BsArrowLeftCircle />
            Voltar
          </LinkContainer>
        </Link>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default List;
