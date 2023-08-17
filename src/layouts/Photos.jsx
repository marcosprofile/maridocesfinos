import React from 'react';

import { Image } from '../styles/Global.styled';

const Photos = ({ data }) => {
  return (
    <Image
      respBorder
      radius="1rem"
      width="100%"
      height="100%"
      src={data.image}
    />
  )
}

export default Photos;