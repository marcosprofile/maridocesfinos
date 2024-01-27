import React from 'react'
import { FlexContainer, GridContainer } from '../../styles/Global.styled'
import { pettyVerre } from '../../utils/Data'
import Container from '../Product/Container'
import Title from '../Product/Title'
import HeaderProducts from '../Product/HeaderProducts'
import List from '../../layouts/List'

export default function PettyVerre() {
  return (
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
    </FlexContainer>
  )
}
