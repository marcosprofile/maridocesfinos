import React from 'react'
import { motion } from 'framer-motion'
import Gallery from './Gallery/Gallery'
import Button from './Button/Button'
import { FlexContainer, PaddingContainer } from '../styles/Global.styled'
import { fadeInTopVariant } from '../utils/Variants'
import Title from './Catalogo/Title'
import Subtitle from './Catalogo/Subtitle'

const MyPhotos = () => {
  return (
    <PaddingContainer top="4rem" bottom="4rem" left="2rem" right="2rem" responsive bgLight>
      <FlexContainer
        as={motion.div}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        align="center"
        direction="column"
        gap="1.5rem"
      >
        <Title titulo="Feito mais de 3.000 pedidos em 2 anos" />
        <Subtitle subtitulo="Veja fotos de pedidos reais do nosso instagram" />
        <Gallery />
        <FlexContainer top="2rem" respAction>
          <Button bgLink="Primary" value="Instagram" link="https://instagram.com/maridocessfinos?igshid=MzRlODBiNWFlZA==" />
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default MyPhotos;