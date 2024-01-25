import React from 'react'
import { FlexContainer, GridContainer } from '../../styles/Global.styled'
import { classicosFondados } from '../../utils/Data'
import List from '../../layouts/List'

export default function CopinhosFondados() {
  return (
    <GridContainer gap="1rem" responsiveGrid>
      {classicosFondados.map((product) => (
        <FlexContainer
          direction="column"
          align="center"
          radius=".5rem"
          overflow="hidden"
          width="100%"
          maxWidth="320px"
          minWidth="190px"
          border
          responsiveCard
          key={product.id}
        >
          <List data={product} />
        </FlexContainer>
      ))}
    </GridContainer>
  )
}
