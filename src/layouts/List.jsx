import React from 'react';

import {
  Heading,
  FlexContainer,
  Price,
} from '../styles/Global.styled';

const List = ({ data }) => {
  return (
    <>
      <Heading
        grey
        as="h4"
        size="h4"
        weight="bold"
      >
        { data.product_name }
      </Heading>
      <Heading
        grey
        as="p"
        size="p"
      >
        { data.product_desc }
      </Heading>
      <FlexContainer
        marginTop="1rem"
        marginBottom=".5rem"
        width="100%"
        justify="center"
      >
        <Price>
          { data.price }
        </Price>
      </FlexContainer>
    </>
  )
}

export default List;