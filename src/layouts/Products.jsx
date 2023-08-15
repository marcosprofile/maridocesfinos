import React from 'react';

import {
  FlexContainer,
  Image,
  PaddingContainer,
  Paragraph,
  Title,
} from '../styles/Global.styled';

const Products = ({ data }) => {
  return (
    <FlexContainer
      direction="column"
      align="left"
      radius="8px"
      border
    >
      <Image src={data.product_image} alt={data.product_name} draggable="false" />
      <PaddingContainer
        top="50px"
        bottom="50px"
        left="44px"
        right="44px"
      >
        <Title grey weight="bold" >
          {data.product_name}
        </Title>
        <Paragraph grey >
          {data.desc}
        </Paragraph>
        <Paragraph
          grey
          size="24px"
        >
          {data.price}
        </Paragraph>
      </PaddingContainer>
    </FlexContainer>
  )
}

export default Products