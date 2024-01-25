import React from 'react'
import { RouterLink } from '../../styles/Global.styled'

export default function Button(props) {
  return (
    <RouterLink
      width={props.width}
      top="1.5rem"
      bottom="1.5rem"
      left="3rem"
      right="3rem"
      justify="center"
      radius=".5rem"
      href={props.link}
      target="_blank"
      color={props.color}
      respLink
    >
      {props.value}
    </RouterLink>
  )
}
