import React from 'react'
import { GridContainer } from '../../styles/Global.styled'
import { pettyVerre } from '../../utils/Data'
import Container from '../Product/Container'
import List from '../../layouts/List'

export default function PettyVerre() {
  return (
    <GridContainer gap="1rem" responsiveGrid>
      {pettyVerre.map((product) => (
        <Container key={product.id}>
          <List data={product} />
        </Container>
      ))}
    </GridContainer>
  )
}
