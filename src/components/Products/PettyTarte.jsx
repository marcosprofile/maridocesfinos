import React from 'react'
import { GridContainer } from '../../styles/Global.styled'
import { pettyTarte } from '../../utils/Data'
import Container from '../Product/Container'
import List from '../../layouts/List'

export default function PettyTarte() {
  return (
    <GridContainer gap="1rem" responsiveGrid>
      {pettyTarte.map((product) => (
        <Container key={product.id}>
          <List data={product} />
        </Container>
      ))}
    </GridContainer>
  )
}
