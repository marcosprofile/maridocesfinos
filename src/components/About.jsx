import React from 'react'
import { motion } from 'framer-motion'
import InfoList from './InfoList/InfoList'

import {
  FlexContainer,
  Heading,
  Image,
  PaddingContainer
} from '../styles/Global.styled'

/* Images */
import RightImage from '../assets/about.png'
import TopImage from '../assets/top.png';
import BottomImage from '../assets/bottom.png'

/* Animations */
import { fadeInTopVariant } from '../utils/Variants'
import Button from './Button/Button';

const About = () => {
  return (
    <FlexContainer direction="column" bgBlue>
      <Image respBottom height="340px" src={TopImage} />
      <FlexContainer
        as={motion.div}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        justify="center"
        top="3rem"
      >
        <Heading as="h2" size="h2">Sobre</Heading>
      </FlexContainer>
      <PaddingContainer
        top="5rem"
        bottom="6rem"
        left="240px"
        right="240px"
        responsive
        bgBlue
      >
        <FlexContainer align="center" showImage>
          <FlexContainer
            as={motion.div}
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            direction="column"
            align="center"
            width="100%"
            gap="1.5rem"
          >
            <InfoList info="A mesa de doces é o ápice da sua festa e a última memória que seu convidado lembrará com saudades da sua festa." grey={false} />
            <InfoList info="Ela deve ser encantadora e refletir todo cuidado que você planejou para seus convidados para esse momento especial." grey={false} />
            <InfoList info="Estou aqui para te ajudar a planejar a mesa de doces mais linda e deliciosa que você já viu, tornando sua festa inesquecível!" grey={false} />
            <InfoList info="Todos os doces são entregues em forminhas de acetato transparente, para que o doce seja o astro principal da mesa." grey={false} />
            <FlexContainer top="2.5rem" align="center" gap="2.5rem" direction="column" respAction>
              <Heading as="p" size="p">
                Ficou interessada(o)? Entre em contato comigo.
              </Heading>
              <Button color="Primary" value="WhatsApp" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento" />
            </FlexContainer>
          </FlexContainer>
          <FlexContainer
            as={motion.div}
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            justify="center"
            width="100%"
          >
            <Image radius="1rem" src={RightImage} draggable="false" responsive />
          </FlexContainer>
        </FlexContainer>
      </PaddingContainer>
      <Image respBottom height="340px" src={BottomImage} />
    </FlexContainer>
  )
}

export default About