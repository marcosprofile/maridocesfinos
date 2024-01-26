import React from 'react'
import { GridContainer } from '../../styles/Global.styled'
import { classicosFondados } from '../../utils/Data'
import Container from './../Product/Container'
import List from '../../layouts/List'

export default function CopinhosFondados() {
  return (
    <GridContainer gap="1rem" responsiveGrid>
      {classicosFondados.map((product) => (
        <Container key={product.id}>
          <List data={product} />
        </Container>
      ))}
    </GridContainer>
  )
}
