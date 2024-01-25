import React from 'react'
import { FlexContainer, RouterLink } from '../../styles/Global.styled'

export default function ConsultButton(props) {
  return (
    <FlexContainer marginTop="2rem" justify="center" height="auto">
      <RouterLink
        top="1.5rem"
        bottom="1.5rem"
        left="3rem"
        right="3rem"
        justify="center"
        radius=".5rem"
        href={props.link}
        target="_blank"
        color="Primary"
        respLink
      >
        {props.value}
      </RouterLink>
    </FlexContainer>
  )
}
