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
      <Image width="100%" height="164px" src={data.product_img} respImgCard />
      <FlexContainer
        direction="column"
        padding=".75rem"
      >
        <Heading
          grey
          as="h5"
          size="h5"
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
      </FlexContainer>
    </>
  )
}

export default List;