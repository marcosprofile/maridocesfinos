import React from 'react';

import {
  GridContainer,
  PaddingContainer,
  FlexContainer,
} from '../styles/Global.styled';

import BrigadeirosGourmet from '../layouts/BrigadeirosGourmet';

import Bombons from '../layouts/Bombons';

const MyProducts = () => {
  return (
    <PaddingContainer
      top="3rem"
      bottom="8rem"
      width="100%"
    >
      <FlexContainer direction="column" align="center" gap="2rem">
        <BrigadeirosGourmet />
        <Bombons />
      </FlexContainer>
    </PaddingContainer>
  )
}

export default MyProducts
