import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  FlexContainer,
  PaddingContainer,
  Heading,
  GridContainer,
  GridItem,
  LinkContainer,
} from '../styles/Global.styled';

import { BsInstagram } from 'react-icons/bs'

import { Gallery } from '../utils/Data';
import Photos from '../layouts/Photos';

import {
  fadeInTopVariant,
} from '../utils/Variants';

const MyPhotos = () => {
  return (
    <PaddingContainer
      top="8rem"
      bottom="8rem"
      left="2rem"
      right="2rem"
      responsive
    >
      <FlexContainer
        as={motion.div}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        align="center"
        direction="column"
        gap="1.5rem"
      >
        <Heading
          as="h2"
          size="h2"
          grey
        >
          Feito mais de 3.000 pedidos em 2 anos
        </Heading>
        <Heading
          as="h4"
          size="h4"
          grey
        >
          Veja fotos de pedidos reais do nosso instagram
        </Heading>
        <PaddingContainer
          top="2rem"
          width="100%"
        >
          <GridContainer
            as={motion.div}
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            responsiveGrid
            grid
            columns="repeat(3, 1fr)"
          >
            {Gallery.map((gallery) => (
              <GridItem responsiveCard key={gallery.id}>
                <Photos data={gallery} />
              </GridItem>
            ))}
          </GridContainer>
        </PaddingContainer>
        <FlexContainer
          top="2.5rem"
          justify="center"
        >
          <Link to="https://instagram.com/maridocessfinos?igshid=MzRlODBiNWFlZA==" target="_blank">
            <LinkContainer
              top="1.5rem"
              bottom="1.5rem"
              left="2.5rem"
              right="2.5rem"
              align="center"
              gap=".5rem"
              primary
            >
              <BsInstagram />
              Instagram
            </LinkContainer>
          </Link>
        </FlexContainer>
      </FlexContainer>
      <GridContainer>
        
      </GridContainer>
    </PaddingContainer>
  )
}

export default MyPhotos;