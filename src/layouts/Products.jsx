import React from 'react';

import {
  Image,
  GridItem,
  GridDesc,
  Heading,
} from '../styles/Global.styled';

const Products = ({ data }) => {
  return (
    <GridItem border>
      <Image
        src={data.product_image}
        alt={data.product_name}
        draggable="false"
      />
      <GridDesc>
        <Heading
          as="h3"
          size="h3"
          weight="bold"
          grey
        >
          {data.product_name}
        </Heading>
        <Heading
          as="p"
          size="p"
          grey
        >
          {data.desc}
        </Heading>
        <Heading
          as="h3"
          size="h3"
          grey
        >
          {data.price}
        </Heading>
      </GridDesc>
    </GridItem>
  )
}

export default Products;