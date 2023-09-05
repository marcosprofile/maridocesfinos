import React from 'react'
import { motion } from 'framer-motion'

import {
  FlexContainer,
  Heading,
  Image,
  Icon,
  PaddingContainer,
  RouterLink,
} from '../styles/Global.styled'

import BottomImage from '../assets/bottom.png';
import TopImage from '../assets/top.png';

import { BsFillRecordFill } from 'react-icons/bs'

import {
  fadeInRightVariant,
  fadeInTopVariant,
} from '../utils/Variants'

const Tasting = () => {
  return (
    <FlexContainer direction="column" bgBlue>
      <Image respBottom height="300px" src={TopImage} draggable="false" />
      <FlexContainer
        justify="center"
        top="3rem"
        as={motion.div}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
      >
        <Heading
          as="h2"
          size="h2"
        >
          Degustação
        </Heading>
      </FlexContainer>
      <PaddingContainer
        top="5rem"
        bottom="2rem"
        left="240px"
        right="240px"
        responsive
        bgBlue
      >
        <FlexContainer
          align="center"
        >
          <FlexContainer
            as={motion.div}
            variants={fadeInRightVariant}
            initial="hidden"
            whileInView="visible"
            direction="column"
            align="center"
            width="100%"
            gap="1.5rem"
          >
            <Heading
              as="p"
              size="p"
              bottom="0"
            >
              <FlexContainer
                gap=".5rem"
                marginBottom="1rem"
              >
                <Icon
                  top=".25rem"
                  point
                >
                  <BsFillRecordFill />
                </Icon>
                <Heading
                  as="p"
                  size="p"
                  weight="400"
                  bottom="0"
                  align="left"
                >
                  A degustação é uma forma do cliente conhecer nosso trabalho antes de fechar o pedido e para conhecer sabores, texturas e apresentação dos doces.
                </Heading>
              </FlexContainer>
              <FlexContainer
                gap=".5rem"
                marginBottom="1rem"
              >
                <Icon
                  top=".25rem"
                  point
                >
                  <BsFillRecordFill />
                </Icon>
                <Heading
                  as="p"
                  size="p"
                  weight="400"
                  bottom="0"
                  align="left"
                >
                  A degustação pode ser presencial com agendamento prévio ou caixa de degustação com 15 doces.
                </Heading>
              </FlexContainer>
              <FlexContainer
                gap=".5rem"
                marginBottom="1rem"
              >
                <Icon
                  top=".25rem"
                  point
                >
                  <BsFillRecordFill />
                </Icon>
                <Heading
                  as="p"
                  size="p"
                  weight="400"
                  bottom="0"
                  align="left"
                >
                  A degustação possui um valor que será abatido caso o contrato seja fechado no prazo de 7 dias.
                </Heading>
              </FlexContainer>
            </Heading>
            <FlexContainer
              top="2.5rem"
              align="center" 
              gap="1rem"
              direction="column"
              respAction
            >
              <RouterLink
                width="100%"
                top="1.5rem"
                bottom="1.5rem"
                left="3rem"
                right="3rem"
                radius=".5rem"
                justify="center"
                align="center"
                gap=".75rem"
                href="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20solicitar%20a%20degustação"
                target="_blank"
                respLink
                primary
              >
                Solicitar degustação
              </RouterLink>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </PaddingContainer>
      <Image respBottom height="340px" src={BottomImage} draggable="false" />
    </FlexContainer>
  )
}

export default Tasting