import React from 'react'
import { FlexContainer, CtaButton, Heading } from '../../styles/Global.styled';
import Subtitle from './Subtitle';

export default function HeaderProducts() {
  return (
    <FlexContainer direction="column" align="center">
      <CtaButton direction="column" width="max-content" padding="1rem 2rem" color="Secondary" gap="1rem" respAction>
        <Subtitle subtitulo="Todos  os valores se referem a unidade no centro de doces" />
        <Heading as="p" size="p" color="grey">
          (quantidade mínima de qualquer sabor do cardápio: 25 unidades)
        </Heading>
      </CtaButton>
    </FlexContainer>
  )
}
