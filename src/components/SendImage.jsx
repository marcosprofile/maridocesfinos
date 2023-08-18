import React from 'react';
import { motion } from 'framer-motion';

import {
  FlexContainer,
  PaddingContainer,
  Heading,
  Button,
  RouterLink,
  Image,
} from '../styles/Global.styled';

import BottomImage from '../assets/bottom.png';
import TopImage from '../assets/top.png';

import { fadeInTopVariant } from '../utils/Variants';

const SendImage = () => {
  return (
    <FlexContainer direction="column" bgBlue>
      <Image respBottom height="300px" src={TopImage} />
      <PaddingContainer
        top="4rem"
        bottom="4rem"
        left="240px"
        right="240px"
        responsive
        bgBlue
      >
        <FlexContainer>
          <FlexContainer
            as={motion.div}
            variants={fadeInTopVariant}
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
              NÃO ENCONTROU O QUE PRECISA?
            </Button>
            <Heading
              as="h2"
              size="h2"
              weight="600"
              bottom="0"
            >
              Prepararemos um pedido de qualquer complexidade de acordo com uma foto ou descrição
            </Heading>
            <Heading
              as="h4"
              size="h4"
              weight="400"
              bottom="0"
            >
              Nos envie uma foto do item desejado e calcularemos o custo em 30 minutos
            </Heading>
            <FlexContainer
              top="40px"
              justify="center"
              width="100%"
            >
              <RouterLink
                top="1.5rem"
                bottom="1.5rem"
                left="3rem"
                right="3rem"
                radius=".5rem"
                justify="center"
                href="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20pedido"
                target="_blank"
                primary
                respLink
              >
                Enviar pedido
              </RouterLink>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </PaddingContainer>
      <Image respBottom height="300px" src={BottomImage} />
    </FlexContainer>
  )
}

export default SendImage
