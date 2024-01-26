import React from 'react'
import { GridContainer } from '../../styles/Global.styled'
import { brigadeirosGourmetDetails } from '../../utils/Data'
import Container from './../Product/Container'
import List from '../../layouts/List'

export default function Brigadeiros() {
  return (
    <GridContainer gap="1rem" responsiveGrid>
      {brigadeirosGourmetDetails.map((product) => (
        <Container key={product.id}>
          <List data={product} />
        </Container>
      ))}
    </GridContainer>
  )
}
