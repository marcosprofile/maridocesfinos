import React from 'react';
import { motion } from 'framer-motion';

import {
  FlexContainer,
  GridContainer,
  PaddingContainer,
  RouterLink,
} from '../styles/Global.styled';

import { productDetails } from '../utils/Data';
import Products from '../layouts/Products';

import { fadeInTopVariant } from '../utils/Variants';

const MyProducts = () => {
  return (
    <PaddingContainer
      top="3rem"
      bottom="8rem"
      left="240px"
      right="240px"
    >
      <GridContainer
        as={motion.div}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        align="center"
        direction="column"
        gap="2rem"
      >
        {productDetails.map((product) => (
            <PaddingContainer key={product.id}>
              <Products data={product} />
            </PaddingContainer>
          ))}
      </GridContainer>
      <FlexContainer
        top="40px"
        width="100%"
        justify="center"
      >
        <RouterLink
          top="1.5rem"
          bottom="1.5rem"
          left="3rem"
          right="3rem"
          href="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento"
          target="_blank"
          primary
        >
          Solicitar orçamento
        </RouterLink>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default MyProducts
