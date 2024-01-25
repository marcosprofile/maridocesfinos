import React from 'react'
import { FlexContainer, BgColor, Heading } from '../../styles/Global.styled';

export default function HeaderProducts() {
  return (
    <FlexContainer direction="column" align="center">
      <BgColor direction="column" width="max-content" padding="1rem 2rem" color="Secondary" gap="1rem" respAction>
        <Heading as="h4" size="h4" grey weight="600">
          Todos  os valores se referem a unidade no centro de doces
        </Heading>
        <Heading as="p" size="p" grey>
          (quantidade mínima de qualquer sabor do cardápio: 25 unidades)
        </Heading>
      </BgColor>
    </FlexContainer>
  )
}
