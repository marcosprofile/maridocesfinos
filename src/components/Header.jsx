/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Image,
  LinkContainer,
  MenuButton,
  NavBar,
  StyledHeader,
  PaddingContainer,
  Heading,
  Button,
} from '../styles/Global.styled';

import Logo from '../assets/logo.svg';

import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <StyledHeader
        width="100%"
        height="80px"
        left="80px"
        right="80px"
        align="center"
        gap="4rem"
        bgBlue
      >
        <Link to="/">
          <Image respWidth src={Logo} />
        </Link>
        <NavBar
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

          <Button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ContactModal">
            Contato
          </Button>
        </NavBar>
        
        <MenuButton
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          onClick={toggleMenu}
        >
          <FaBars />
        </MenuButton>

        <div class={`offcanvas offcanvas-end ${isMenuOpen ? 'show' : ''}`} tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <PaddingContainer width="100%" right="4rem" bottom="2rem"></PaddingContainer>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <PaddingContainer right="1rem" bottom="2rem"></PaddingContainer>
          </div>
          <div class="offcanvas-body">
            <PaddingContainer height="4rem"></PaddingContainer>
            <Link to="/" onClick={() => { closeMenu(); window.location.href = '/'; }}>
              <Heading
                as="h1"
                size="h1"
                grey
              >
                Início
              </Heading>
            </Link>
            <PaddingContainer height="2rem"></PaddingContainer>
            <Link to="/catalogo" onClick={() => { closeMenu(); window.location.href = '/catalogo'; }}>
              <Heading
                as="h1"
                size="h1"
                grey
              >
                Catálogo
              </Heading>
            </Link>
            <PaddingContainer height="2rem"></PaddingContainer>
            <Button
              data-bs-toggle="modal"
              data-bs-target="#ContactModal"
              justify="center"
              width="100%"
              height="2rem"
            >
              <Heading
                as="h1"
                size="h1"
                grey
              >
                Contato
              </Heading>
            </Button>
          </div>
        </div>
      </StyledHeader>
      <div class="modal fade" id="ContactModal" tabindex="1" aria-labelledby="ContactModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="ContactModalLabel">Contato</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <Heading as="p" size="p" weight="bold" bottom="0" grey>
                WhatsApp:
              </Heading>
              <Heading as="p" size="p" grey>
                +55 (11) 96945-6530
              </Heading>
              <Heading as="p" size="p" weight="bold" bottom="0" grey>
                E-mail:
              </Heading>
              <Heading as="p" size="p" grey>
                marinezperreira@outlook.com
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;
