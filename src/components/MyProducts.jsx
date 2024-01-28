import React from 'react'

// Styled
import { PaddingContainer, FlexContainer } from '../styles/Global.styled'

// Products
import Brigadeiros from './Products/Brigadeiros'
import Bombons from './Products/Bombons'
import PettyVerre from './Products/PettyVerre'
import PettyTarte from './Products/PettyTarte'
import CopinhosTrufados from './Products/CopinhosTrufados'
import CopinhosFondados from './Products/CopinhosFondados'
import CaixaDeDegustacao from './Products/CaixaDeDegustacao'


const MyProducts = () => {
  return (
    <PaddingContainer top="3rem" bottom="8rem" width="100%">
      <FlexContainer direction="column" align="center" gap="2rem">
        <Bombons />
        <Brigadeiros />
        <PettyVerre />
        <PettyTarte />
        <CopinhosTrufados />
        <CopinhosFondados />
        <CaixaDeDegustacao />
      </FlexContainer>
    </PaddingContainer>
  )
}

export default MyProducts