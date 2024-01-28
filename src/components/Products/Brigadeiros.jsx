import React from 'react'
import { motion } from 'framer-motion'

// Styled
import { FlexContainer, GridContainer } from '../../styles/Global.styled'

// Components
import Container from './../Product/Container'
import Title from './../Product/Title'
import HeaderProducts from './../Product/HeaderProducts'
import ContainerItems from './../Product/ContainerItems'
import Button from '../Button/Button'
import List from '../../layouts/List'

// Utils
import { brigadeirosGourmetDetails } from '../../utils/Data'
import { fadeInLeftVariant } from './../../utils/Variants'


export default function Brigadeiros() {
  return (
    <ContainerItems motion={motion.div} slide={fadeInLeftVariant}>
      <FlexContainer direction="column" gap="1.5rem">
        <Title titulo="Brigadeiros" />
        <HeaderProducts />
        <GridContainer gap="1rem" responsiveGrid>
          {brigadeirosGourmetDetails.map((product) => (
            <Container key={product.id}>
              <List data={product} />
            </Container>
          ))}
        </GridContainer>
        <FlexContainer justify="center" top="2rem">
          <Button color="Primary" value="Consultar mais sabores" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento" />
          </FlexContainer>
      </FlexContainer>
    </ContainerItems>
  )
}
