import React from 'react'
import { FlexContainer } from '../../styles/Global.styled'

export default function Container({ children }) {
  return (
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
    >
      {children}
    </FlexContainer>
  )
}
