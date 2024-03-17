import React from 'react'
import { FlexContainer, Heading, Icon } from '../../styles/Global.styled'
import { BsFillRecordFill } from 'react-icons/bs'

export default function InfoList(props) {
  return (
    <FlexContainer gap=".5rem">
      <Icon top=".05rem" point>
        <BsFillRecordFill />
      </Icon>
      <Heading as="p" size="p" weight="400" bottom="0" align="left" color="grey">
        {props.info}
      </Heading>
    </FlexContainer>
  )
}
