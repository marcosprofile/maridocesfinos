import React from 'react';
import { motion } from 'framer-motion';

import {
  GridContainer,
  PaddingContainer,
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
    </PaddingContainer>
  )
}

export default MyProducts
