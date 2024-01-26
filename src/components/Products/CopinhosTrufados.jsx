import React from 'react'
import { GridContainer } from '../../styles/Global.styled'
import { copinhosTrufados } from '../../utils/Data'
import Container from '../Product/Container'
import List from '../../layouts/List'

export default function CopinhosTrufados() {
  return (
    <GridContainer gap="1rem" responsiveGrid>
      {copinhosTrufados.map((product) => (
        <Container key={product.id}>
          <List data={product} />
        </Container>
      ))}
    </GridContainer>
  )
}
