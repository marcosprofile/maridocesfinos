import React from 'react'
import { Heading } from '../../styles/Global.styled'

export default function Subtitle(props) {
  return (
    <Heading as="h4" size="h4" color="grey">
      {props.subtitulo}
    </Heading>
  )
}