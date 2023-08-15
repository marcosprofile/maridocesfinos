/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

import {
  Image,
  FlexContainer,
  LinkContainer,
  NavBar,
  PaddingContainer,
  StyledHeader,
} from '../styles/Global.styled';

import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <StyledHeader>
      <PaddingContainer
        width="100%"
        left="240px"
        right="240px"
      >
        <FlexContainer gap="4rem" align="center">
          <FlexContainer align="center">
            <Link to="/">
              <Image respWidth src={Logo} />
            </Link>
          </FlexContainer>

          <NavBar>
            <FlexContainer
              gap="2.5rem"
              align="center"
            >
              <Link to="/">
                <LinkContainer>
                  Início
                </LinkContainer>
              </Link>
              <Link to="/catalogo">
                <LinkContainer>
                  Catálogo
                </LinkContainer>
              </Link>
            </FlexContainer>
          </NavBar>
        </FlexContainer>
      </PaddingContainer>
    </StyledHeader>
  )
}

export default Header;
