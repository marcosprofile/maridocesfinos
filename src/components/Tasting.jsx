import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button/Button'
import InfoList from './InfoList/InfoList'

import {
  FlexContainer,
  Image,
  PaddingContainer
} from '../styles/Global.styled'

import BottomImage from '../assets/bottom.png'
import TopImage from '../assets/top.png'

import { fadeInRightVariant, fadeInTopVariant } from '../utils/Variants'
import Title from './Catalogo/Title'


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
        <Title titulo="Degustação" />
      </FlexContainer>
      <PaddingContainer top="5rem" bottom="2rem" left="240px" right="240px" responsive>
        <FlexContainer align="center">
          <FlexContainer
            as={motion.div}
            variants={fadeInRightVariant}
            initial="hidden"
            whileInView="visible"
            direction="column"
            width="100%"
            gap="1.5rem"
          >
            <InfoList info="Sabores dos doces sortidos de acordo com a produção da semana." />
            <InfoList info="Não possuímos serviços de entrega da caixa (retirar pessoalmente ou solicitar uber flash)." />
            <InfoList info="Temos caixa com 15 unidades e 24 unidades de sabores sortidos." />
            <InfoList info="Ofereçemos degustação presencial com agendamento." />
            <InfoList info="Aceitamos pagamentos via transferência bancária, cartão de débito/crédito ou pix." />
            <InfoList info="Não recomendamos transportar doces via motoboy." />
            <FlexContainer justify="center" top="2rem">
              <Button bgLink="Primary" value="Solicitar degustação" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20solicitar%20a%20degustação" />
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </PaddingContainer>
      <Image respBottom height="340px" src={BottomImage} draggable="false" />
    </FlexContainer>
  )
}

export default Tasting