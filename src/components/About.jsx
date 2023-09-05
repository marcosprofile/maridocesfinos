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

import RightImage from '../assets/about.png'
import BottomImage from '../assets/bottom.png'

import { FaWhatsapp } from 'react-icons/fa6'
import { BsFillRecordFill } from 'react-icons/bs'

import { fadeInTopVariant } from '../utils/Variants'

const About = () => {
  return (
    <FlexContainer direction="column" bgBlue>
      <FlexContainer
        as={motion.div}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        justify="center"
        top="3rem"
      >
        <Heading
          as="h2"
          size="h2"
        >
          Sobre
        </Heading>
      </FlexContainer>
      <PaddingContainer
        top="5rem"
        bottom="6rem"
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
            variants={fadeInTopVariant}
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
                  A mesa de doces é o ápice da sua festa e a última memória que seu convidado lembrará com saudades da sua festa.
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
                  Ela deve ser encantadora e refletir todo cuidado que você planejou para seus convidados para esse momento especial.
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
                  Estou aqui para te ajudar a planejar a mesa de doces mais linda e deliciosa que você já viu, tornando sua festa inesquecível!
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
                  align="left"
                >
                  Todos os doces são entregues em forminhas de acetato transparente, para que o doce seja o astro principal da mesa.
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
              <Heading
                as="p"
                size="p"
              >
                Ficou interessada(o)? Entre em contato comigo.
              </Heading>
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
                href="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento"
                target="_blank"
                respLink
                primary
              >
                <Icon>
                  <FaWhatsapp />
                </Icon>
                WhatsApp
              </RouterLink>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer
            as={motion.div}
            variants={fadeInTopVariant}
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

export default About