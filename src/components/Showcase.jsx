import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  FlexContainer,
  Heading,
  PaddingContainer,
  Image,
  Button,
  LinkContainer,
} from '../styles/Global.styled';

import {
  fadeInLeftVariant,
  fadeInRightVariant,
} from '../utils/Variants';

import RightImage from '../assets/img_1.png';
import BottomImage from '../assets/bottom.png';

const Showcase = () => {
  return (
    <FlexContainer direction="column" bgBlue>
      <PaddingContainer
        top="8rem"
        bottom="8rem"
        left="240px"
        right="240px"
        responsive
        bgBlue
      >
        <FlexContainer
        >
          <FlexContainer
            as={motion.div}
            variants={fadeInLeftVariant}
            initial="hidden"
            whileInView="visible"
            direction="column"
            align="flex-start"
            width="100%"
            gap="1.5rem"
          >
            <Button
              secondary
              size="12px"
              weight="bold"
              top=".5rem"
              right="1rem"
              bottom=".5rem"
              left="1rem"
            >
              DELICIOSO
            </Button>
            <Heading
              as="h2"
              size="h2"
              weight="bold"
              bottom="0"
            >
              Doces finos e cupcakes a partir de R$20 com entrega em São Paulo
            </Heading>
            <Heading
              as="h4"
              size="h4"
              weight="400"
              bottom="0"
            >
              Prepararemos em 3 horas no dia do pedido.<br></br>Entrega de carro.
            </Heading>
            <FlexContainer
              top="2.5rem"
              align="center" 
              gap="1rem"
              respAction
            >
              <Link to="/catalogo">
                <LinkContainer
                  top="1.5rem"
                  bottom="1.5rem"
                  left="2.5rem"
                  right="2.5rem"
                  primary
                >
                  Ir para o catálogo
                </LinkContainer>
              </Link>
              <Heading
                as="p"
                size="p"
                bottom="0"
              >
                +10 tipos diferentes para escolher
              </Heading>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer
            as={motion.div}
            variants={fadeInRightVariant}
            initial="hidden"
            whileInView="visible"
            justify="center"
            width="100%"
            respImg
          >
            <Image radius="1rem" src={RightImage} />
          </FlexContainer>
        </FlexContainer>
      </PaddingContainer>
      <Image height="300px" src={BottomImage} />
    </FlexContainer>
  )
}

export default Showcase;
