import React from 'react'
import { GridContainer } from '../../styles/Global.styled'
import { bombons } from '../../utils/Data'
import Container from '../Product/Container'
import List from '../../layouts/List'

export default function Bombons() {
  return (
    <GridContainer gap="1rem" responsiveGrid>
      {bombons.map((product) => (
        <Container key={product.id}>
          <List data={product} />
        </Container>
      ))}
    </GridContainer>
  )
}
