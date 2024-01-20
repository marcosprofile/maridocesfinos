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
        id="showcase"
        top="8rem"
        bottom="6rem"
        left="240px"
        right="240px"
        responsive
        bgBlue
      >
        <FlexContainer
          showImage
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
              size="14px"
              top=".5rem"
              right="1rem"
              bottom=".5rem"
              left="1rem"
              radius=".5rem"
              default
              secondary
            >
              DELICIOSO
            </Button>
            <Heading
              as="h2"
              size="h2"
              weight="bold"
              bottom="0"
            >
              Doces finos para casamentos e festas em geral. Com entrega em São Paulo e Região
            </Heading>
            <FlexContainer
              top="2.5rem"
              align="center" 
              gap="1rem"
              respAction
            >
              <Link className="link" to="/catalogo">
                <LinkContainer
                  top="1.5rem"
                  bottom="1.5rem"
                  left="2.5rem"
                  right="2.5rem"
                  radius=".5rem"
                  justify="center"
                  color="Primary"
                  respLink
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
          >
            <Image
              radius="1rem"
              src={RightImage}
              draggable="false"
              responsive
            />
          </FlexContainer>
        </FlexContainer>
      </PaddingContainer>
      <Image respBottom height="340px" src={BottomImage} draggable="false" />
    </FlexContainer>
  )
}

export default Showcase;
