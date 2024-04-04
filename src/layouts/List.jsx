import React from 'react';

import {
  Heading,
  FlexContainer,
  Price,
  Image,
} from '../styles/Global.styled';

const List = ({ data }) => {
  return (
    <>
      <Image width="100%" height="280px" src={data.product_img} respImgCard draggable="false" />
      <FlexContainer  direction="column" padding=".75rem">
        <Heading as="h5" size="h5" weight="bold" color="primary">{ data.product_name }</Heading>
        <Heading as="p" size="p" color="grey">{ data.product_desc }</Heading>
        <FlexContainer marginTop="1rem" marginBottom=".5rem" width="100%" justify="center">
          <Price>{ data.price }</Price>
        </FlexContainer>
      </FlexContainer>
    </>
  )
}

export default List;