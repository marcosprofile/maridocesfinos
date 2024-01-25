import React from 'react';
import { motion } from 'framer-motion'
import Button from './Button/Button'

import {
  FlexContainer,
  PaddingContainer,
  Heading,
  ContainerContact
} from '../styles/Global.styled'

import { fadeInTopVariant } from '../utils/Variants'

export default function Contact() {
  return (
    <FlexContainer direction="column">
      <PaddingContainer top="4rem" bottom="8rem" responsive>
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
              <Heading as="h2" size="h2" weight="600" bottom="0" grey>
                Para fazer um pedido, entre em contato
              </Heading>
              <Heading as="p" size="p" bottom="0" grey>
                Retornaremos de volta assim que possível para esclarecer seus desejos
              </Heading>
              <FlexContainer gap="1rem" top="2rem" respAction>
                <Button color="Secondary" value="WhatsApp" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20pedido" />
                <Button color="Secondary" value="E-mail" link="mailto:marinezpereira@outlook.com" />
              </FlexContainer>
            </ContainerContact>
          </FlexContainer>
        </FlexContainer>
      </PaddingContainer>
    </FlexContainer>
  )
}