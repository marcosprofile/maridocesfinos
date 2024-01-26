import React from 'react'
import { motion } from 'framer-motion'
import Gallery from './Gallery/Gallery'
import Button from './Button/Button'
import { FlexContainer, PaddingContainer, Heading } from '../styles/Global.styled'
import { fadeInTopVariant } from '../utils/Variants'

const MyPhotos = () => {
  return (
    <PaddingContainer top="4rem" bottom="4rem" left="2rem" right="2rem" responsive>
      <FlexContainer
        as={motion.div}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        align="center"
        direction="column"
        gap="1.5rem"
      >
        <Heading as="h2" size="h2" grey>
          Feito mais de 3.000 pedidos em 2 anos
        </Heading>
        <Heading as="h4" size="h4" grey>
          Veja fotos de pedidos reais do nosso instagram
        </Heading>
        <Gallery />
        <FlexContainer top="2rem" respAction>
          <Button color="Primary" value="Instagram" link="https://instagram.com/maridocessfinos?igshid=MzRlODBiNWFlZA==" />
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default MyPhotos;