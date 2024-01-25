/* eslint-disable jsx-a11y/anchor-is-valid */
import{ useState, React } from 'react';
import { Link } from 'react-router-dom';

import {
  Image,
  LinkContainer,
  MenuButton,
  NavBar,
  StyledHeader,
  PaddingContainer,
  Heading
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <StyledHeader>
      <Link to="/" onClick={scrollToTop}>
        <Image respWidth src={Logo} />
      </Link>
      <NavBar gap="2.5rem" align="center">
        <Link to="/" onClick={scrollToTop}>
          <LinkContainer>Início</LinkContainer>
        </Link>
        <Link to="/catalogo" onClick={scrollToTop}>
          <LinkContainer>Catálogo</LinkContainer>
        </Link>
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

      <div
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        className={`offcanvas offcanvas-end ${isMenuOpen ? 'show' : ''}`}
      >
        <div className="offcanvas-header">
          <PaddingContainer width="100%" right="4rem" bottom="2rem"></PaddingContainer>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          <PaddingContainer right="1rem" bottom="2rem"></PaddingContainer>
        </div>
        <div className="offcanvas-body">
          <PaddingContainer height="4rem"></PaddingContainer>
          <Link to="/" onClick={() => { closeMenu(); window.location.href = '/'; }}>
            <Heading as="h1" size="h1" align="center" grey>
              Início
            </Heading>
            </Link>
            <PaddingContainer height="2rem"></PaddingContainer>
            <Link to="/catalogo" onClick={() => { closeMenu(); window.location.href = '/catalogo'; }}>
              <Heading as="h1" size="h1" align="center" grey>
                Catálogo
              </Heading>
            </Link>
          </div>
        </div>
      </StyledHeader>
  )
}

export default Header;
