import React from 'react';

import {
  Heading,
  StyledFooter,
} from '../styles/Global.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <Heading as="h5" size="h5" color="grey">
        &copy; Mary Doces Finos
      </Heading>
    </StyledFooter>
  )
}