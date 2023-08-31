import React from 'react';

import { Image } from '../styles/Global.styled';

const Photos = ({ data }) => {
  return (
    <Image
      respHeight
      radius="1rem"
      width="100%"
      height="428px"
      src={data.image}
      draggable="false"
    />
  )
}

export default Photos;