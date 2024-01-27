import React from 'react'
import { FlexContainer } from '../../styles/Global.styled'

export default function ContainerItems(props) {
  return (
    <FlexContainer
      as={props.motion}
      variants={props.slide}
      initial="hidden"
      whileInView="visible"
      radius="1.5rem"
      width="100%"
      direction="column"
      gap="1.5rem"
      margin="5rem 0"
      align="center"
      responsivePadding
    >
      {props.children}
    </FlexContainer>
  )
}
