import React from 'react'
import { motion } from 'framer-motion'

// Styled
import { FlexContainer, GridContainer } from '../../styles/Global.styled'

// Components
import Container from './../Product/Container'
import Title from './../Product/Title'
import HeaderProducts from './../Product/HeaderProducts'
import ContainerItems from './../Product/ContainerItems'
import BtnContact from '../Product/BtnContact'
import List from '../../layouts/List'

// Utils
import { bombons } from '../../utils/Data'
import { fadeInRightVariant } from './../../utils/Variants'


export default function Bombons() {
  return (
    <ContainerItems motion={motion.div} slide={fadeInRightVariant}>
      <FlexContainer direction="column" gap="1.5rem">
        <Title titulo="Bombons" />
        <HeaderProducts />
        <GridContainer gap="1rem" responsiveGrid>
          {bombons.map((product) => (
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
