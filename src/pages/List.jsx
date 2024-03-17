import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
  FlexContainer,
  PaddingContainer,
  LinkContainer,
} from '../styles/Global.styled';

// BsArrowLeftCircle
import { BsArrowLeftCircle } from "react-icons/bs";

import MyProducts from '../components/MyProducts';

import { fadeInTopVariant } from '../utils/Variants';
import Title from '../components/Catalogo/Title';
import Subtitle from '../components/Catalogo/Subtitle';

const List = () => {
  return (
    <PaddingContainer top="2rem" bottom="2rem" left="1rem" right="1rem" responsive bgLight>
      <FlexContainer
        as={motion.div}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        align="center"
        direction="column"
        gap=".5rem"
      >
        <Title titulo="Catálogo" />
        <Subtitle subtitulo="Esse  é o cardápio com os doces mais pedidos por aqui" />
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
            bgLink="Secondary"
            color="Secondary"
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
