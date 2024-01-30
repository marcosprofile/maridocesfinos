import React from 'react'
import { motion } from 'framer-motion'

// Styled
import { FlexContainer, GridContainer } from '../../styles/Global.styled'

// Components
import Container from './../Catalogo/Container'
import Title from './../Catalogo/Title'
import HeaderProducts from './../Catalogo/HeaderProducts'
import ContainerItems from './../Catalogo/ContainerItems'
import BtnContact from '../Catalogo/BtnContact'
import List from '../../layouts/List'

// Utils
import { pettyVerre } from '../../utils/Catalogo/PettyVerreData'
import { fadeInRightVariant } from './../../utils/Variants'


export default function PettyVerre() {
  return (
    <ContainerItems motion={motion.div} slide={fadeInRightVariant}>
      <FlexContainer direction="column" gap="1.5rem">
        <Title titulo="Petty Verre" />
        <HeaderProducts />
        <GridContainer gap="1rem" responsiveGrid>
          {pettyVerre.map((product) => (
            <Container key={product.id}>
              <List data={product} />
            </Container>
          ))}
        </GridContainer>
        <FlexContainer justify="center" top="2rem">
          <BtnContact value="Consultar mais sabores" color="Primary" />
        </FlexContainer>
      </FlexContainer>
    </ContainerItems>
  )
}
