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
import { pettyTarte } from '../../utils/Data'
import { fadeInLeftVariant } from './../../utils/Variants'


export default function PettyTarte() {
  return (
    <ContainerItems motion={motion.div} slide={fadeInLeftVariant}>
      <FlexContainer direction="column" gap="1.5rem">
        <Title titulo="Petty Tarte" />
        <HeaderProducts />
        <GridContainer gap="1rem" responsiveGrid>
          {pettyTarte.map((product) => (
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
