import React from 'react';
import { motion } from 'framer-motion';

import {
  FlexContainer,
  Heading,
  PaddingContainer,
  Image,
  Icon,
  Button,
  LinkContainer,
  RouterLink,
} from '../styles/Global.styled';

import { BsFillRecordFill } from 'react-icons/bs';

import BottomImage from '../assets/bottom.png';
import TopImage from '../assets/top.png';

import {
  fadeInLeftVariant,
  fadeInRightVariant,
} from '../utils/Variants';

import RightImage from '../assets/confeiteira.png';

const AboutMe = () => {
  return (
    <FlexContainer direction="column" bgBlue>
      <Image respBottom height="300px" src={TopImage} />
      <PaddingContainer
        top="8rem"
        bottom="6rem"
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
              size="14px"
              top=".5rem"
              right="1rem"
              bottom=".5rem"
              left="1rem"
              radius=".5rem"
              default
              secondary
            >
              QUEM VAI COZINHAR?
            </Button>
            <Heading
              as="h2"
              size="h2"
              weight="bold"
              bottom="0"
            >
              Vou preparar e embalar tudo lindamente para o seu evento.
            </Heading>
            <FlexContainer gap=".5rem" >
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
              >
                Vou aconselhar na escolha dos doces e ter uma ideia fora do padrão
              </Heading>
            </FlexContainer>
            <FlexContainer gap=".5rem" >
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
              >
                Vou preparar doces para o seu evento que com certeza todos vão gostar
              </Heading>
            </FlexContainer>
            <FlexContainer gap=".5rem" >
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
              >
                Vou embalar tudo de maneira organizada e bonita, se você quiser fazer um belo presente.
              </Heading>
            </FlexContainer>
            <FlexContainer
              top="2.5rem"
              align="center" 
              gap="1rem"
              respAction
            >
              <RouterLink respLink href="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20pedido" target="_blank">
                <LinkContainer
                  top="1.5rem"
                  bottom="1.5rem"
                  left="2.5rem"
                  right="2.5rem"
                  radius=".5rem"
                  justify="center"
                  respLink
                  primary
                >
                  Faça uma pergunta a Mari
                </LinkContainer>
              </RouterLink>
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
            <Image radius="1rem" src={RightImage} draggable="false" />
          </FlexContainer>
        </FlexContainer>
      </PaddingContainer>
      <Image respBottom height="340px" src={BottomImage} />
    </FlexContainer>
  )
}

export default AboutMe
