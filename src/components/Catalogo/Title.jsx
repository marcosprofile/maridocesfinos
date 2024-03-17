import React from 'react'
import { Heading } from '../../styles/Global.styled'

export default function Title(props) {
  return (
    <Heading as="h2" size="h2" weight="700" color="primary">
      {props.titulo}
    </Heading>
  )
}
