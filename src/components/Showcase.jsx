import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import {
  FlexContainer,
  Heading,
  PaddingContainer,
  Image,
  Badge
} from '../styles/Global.styled'

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'

import RightImage from '../assets/img_1.png'
import BottomImage from '../assets/bottom.png'
import Button from './Button/Button'

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
        <FlexContainer showImage>
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
            <Badge padding=".5rem .75rem" radius=".5rem" fontWeight="600">
              DELICIOSO
            </Badge>
            <Heading  as="h2" size="h2" weight="bold" bottom="0">
              Doces finos para casamentos e festas em geral. Com entrega em São Paulo e Região
            </Heading>
            <FlexContainer top="2.5rem" align="center" gap="1rem" respAction>
              <Link className="link" to="/catalogo">
              <FlexContainer justify="center">
                <Button color="Primary" value="Ir para o catálogo" />
              </FlexContainer>
              </Link>
              <Heading as="p" size="p" bottom="0">
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
            <Image radius="1rem" src={RightImage} draggable="false" responsive />
          </FlexContainer>
        </FlexContainer>
      </PaddingContainer>
      <Image respBottom height="340px" src={BottomImage} draggable="false" />
    </FlexContainer>
  )
}

export default Showcase;
