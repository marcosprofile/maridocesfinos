import React from 'react';
import { motion } from 'framer-motion';

import {
  FlexContainer,
  PaddingContainer,
  Heading,
  Image,
  RouterLink,
  ContainerContact,
  Icon,
} from '../styles/Global.styled';

import {
  FaRegEnvelope,
  FaWhatsapp,
} from 'react-icons/fa6';

import {
  fadeInTopVariant,
} from '../utils/Variants';

const Contact = () => {
  return (
    <FlexContainer direction="column">
      <PaddingContainer
        top="4rem"
        bottom="4rem"
        responsive
      >
        <FlexContainer>
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
              <Heading
                as="h2"
                size="h2"
                weight="600"
                bottom="0"
                grey
              >
                Para fazer um pedido, entre em contato
              </Heading>
              <Heading
                as="p"
                size="p"
                bottom="0"
                grey
              >
                Retornaremos de volta assim que possível para esclarecer seus desejos
              </Heading>
              <FlexContainer
                top="40px"
                justify="center"
                width="100%"
                gap="1rem"
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
                  href="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20pedido"
                  target="_blank"
                  secondary
                  respLink
                >
                  <Icon>
                    <FaWhatsapp />
                  </Icon>
                  WhatsApp
                </RouterLink>
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
                  href="mailto:marinezperreira@outlook.com"
                  target="_blank"
                  secondary
                  respLink
                >
                  <Icon>
                   <FaRegEnvelope />
                  </Icon>
                  E-mail
                </RouterLink>
              </FlexContainer>
            </ContainerContact>
          </FlexContainer>
        </FlexContainer>
      </PaddingContainer>
    </FlexContainer>
  )
}

export default Contact