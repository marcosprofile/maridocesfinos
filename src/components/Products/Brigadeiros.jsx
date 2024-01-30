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
import { brigadeiros } from '../../utils/Catalogo/BrigadeirosData'
import { fadeInLeftVariant } from './../../utils/Variants'


export default function Brigadeiros() {
  return (
    <ContainerItems motion={motion.div} slide={fadeInLeftVariant}>
      <FlexContainer direction="column" gap="1.5rem">
        <Title titulo="Brigadeiros" />
        <HeaderProducts />
        <GridContainer gap="1rem" responsiveGrid>
          {brigadeiros.map((product) => (
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
