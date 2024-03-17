import React from 'react';
import { motion } from 'framer-motion'
import Button from './Button/Button'

import {
  FlexContainer,
  ContainerContact
} from '../styles/Global.styled'

import { fadeInTopVariant } from '../utils/Variants'
import Title from './Catalogo/Title';
import Subtitle from './Catalogo/Subtitle';

export default function Contact() {
  return (
    <FlexContainer top="4rem" bottom="8rem" responsive bgLight>
      <FlexContainer
        as={motion.div}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        justify="center"
        width="100%"
      >
        <ContainerContact
          top="70px"
          bottom="70px"
          left="150px"
          right="150px"
          direction="column"
          align="center"
          gap="1rem"
        >
          <Title titulo="Para fazer um pedido, entre em contato" />
          <Subtitle subtitulo="Retornaremos de volta assim que possível para esclarecer seus desejos" />
          <FlexContainer gap="1rem" top="2rem" respAction>
            <Button bgLink="Secondary" color="Secondary" value="WhatsApp" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20pedido" />
            <Button bgLink="Secondary" color="Secondary" value="E-mail" link="mailto:marinezpereira@outlook.com" />
          </FlexContainer>
        </ContainerContact>
      </FlexContainer>
    </FlexContainer>
  )
}