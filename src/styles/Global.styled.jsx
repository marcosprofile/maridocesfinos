import styled from 'styled-components';

import { theme } from '../utils/Theme';

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.bgColor};
  color: ${theme.colors.textColor};
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 4rem;
  };
`;

export const PaddingContainer = styled.div`
  background-color: ${(props) => props.bgTheme ? `${theme.colors.bgColor}` : ''};
  background-color: ${(props) => props.bgLight ? `${theme.colors.light}` : ''};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom};
  padding-left: ${({ left }) => left};
  padding-right: ${({ right }) => right};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};

  @media (max-width: 1440px) {
    padding-left: ${(props) => props.responsive ? '3rem' : ''};
    padding-right: ${(props) => props.responsive ? '3rem' : ''};
  }

  @media (max-width: 1024px) {
    padding-left: ${(props) => props.responsive ? '1rem' : ''};
    padding-right: ${(props) => props.responsive ? '1rem' : ''};
    width: ${(props) => props.responsive ? '100%' : ''};
  };
  
  @media (max-width: 768px) {
    padding-top: ${(props) => props.responsive ? '2.5rem' : ''};
    padding-bottom: ${(props) => props.responsive ? '2.5rem' : ''};
    width: ${(props) => props.responsive ? '100%' : ''};
    flex-direction: ${(props) => props.showImage ? 'column-reverse' : 'row'};
    gap: ${(props) => props.showImage ? '4rem' : ''};
  };
`;

export const FlexContainer = styled(PaddingContainer)`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  width: ${({ width }) => width};
  height: auto !important;
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  align-items: ${({ align }) => align};
  border-radius: ${({ radius }) => radius};
  border: ${(props) => props.border ? `1px solid ${theme.colors.strokeBorder}` : ''};
  gap: ${({ gap }) => gap};
  overflow: ${({ overflow }) => overflow};
  font-weight: ${({ fontWeight }) => fontWeight};

  @media (max-width: 1175px) {
    display: ${(props) => props.respImg ? 'none' : ''};
  }
  
  @media (max-width: 600px) {
    width: ${(props) => props.respAction ? '100%' : ''};
    width: ${(props) => props.responsiveCard ? '100%' : ''};
    max-width: ${(props) => props.responsiveCard ? '375px' : ''};
    min-width: ${(props) => props.responsiveCard ? '280px' : ''};
    flex-grow: ${(props) => props.responsiveCard ? '1' : ''};
    margin: ${(props) => props.responsivePadding ? '0 0 4rem 0' : ''};
    flex-direction: ${(props) => props.respAction ? 'column' : ''};
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  background: ${theme.colors.bgColor};
  padding: 0 80px;
  width: 100%;
  height: 80px;
  align-items: center;
  gap: 4rem;
  box-shadow: 0px 12px 16px 0px ${theme.colors.black20};
  z-index: 20;

  @media(max-width: 1024px) {
    padding: 0 2rem;
    justify-content: space-between;
  }
`;

export const NavBar = styled(FlexContainer).attrs({ as: 'nav' })`
  @media(max-width: 1024px) {
    display: none;
  }
`;

export const Heading = styled(PaddingContainer)`
  color: ${({ color }) => {
    switch(color) {
      case 'primary':
        return `${theme.colors.primary}`;

      case 'grey':
        return `${theme.colors.textColor}`;

      default:
        return `${theme.colors.light}`;
    }
  }};
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align};
  line-height: 156%;
  margin: 0;
  margin-bottom: ${({ bottom }) => bottom} !important;
  font-size: ${({ size }) => {
    switch(size) {
      case 'h1':
        return '3rem';
      
      case 'h2':
        return '2.5rem';

      case 'h3':
        return '2rem';

      case 'h4':
        return '1.5rem';

      case 'h5':
        return '1.25rem';
      
      case 'p':
        return '.875rem';

      default:
        return;
    };
  }};

  @media(max-width: 1024px) {
    font-size: ${({ size }) => {
      switch(size) {
        case 'h1':
          return '2.25rem';
        
        case 'h2':
          return '1.75rem';

        case 'h3':
          return '1.5rem';

        case 'h4':
          return '1.25rem';

        case 'h5':
          return '1rem';

        case 'p':
          return '.875rem';

        default:
          return;
      };
    }};
  };
`;

export const Image = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius};
  object-fit: cover;

  @media (max-width: 1024px) {
    height: ${(props) => props.respHeight ? '328px' : ''};
  }

  @media (max-width: 768px) {
    height: ${(props) => props.respWidth ? '32px' : ''};
    height: ${(props) => props.respBottom ? '120px' : ''};
    height: ${(props) => props.respHeight ? '200px' : ''};
    height: ${(props) => props.respImgCard ? '240px' : ''};
    width: ${(props) => props.responsive ? '100%' : ''};
  };
`;

export const LinkContainer = styled(FlexContainer)`
  font-size: 18px;
  font-weight: 500;
  background-color: ${({ bgLink }) => {
      switch(bgLink) {
        case 'Primary':
          return `${theme.colors.primary}`;
        
        case 'Secondary':
          return `${theme.colors.secondary}`;

        default:
          return 'transparent';
      };
  }} !important;
  color: ${({ color }) => {
      switch(color) {
        case 'Primary':
          return `${theme.colors.primary}`;
        
        case 'Secondary':
          return `${theme.colors.textColor}`;

        default:
          return `${theme.colors.light}`;
      };
  }} !important;
  transition: all .2s linear;

  &:hover {
    transform: scale(.95);
  }

  @media (min-width: 600px) {
    width: ${(props) => props.respLink ? 'max-content' : ''};
  }

  @media (max-width: 600px) {
    width: ${(props) => props.respLink ? '100%' : ''};
  };
`;

export const CtaButton = styled(FlexContainer)`
  border-radius: .5rem;
  background-color: ${({ color }) => {
      switch(color) {
        case 'Primary':
          return `${theme.colors.primary}`;
        
        case 'Secondary':
          return `${theme.colors.secondary}`;

        default:
          return 'transparent';
      };
  }} !important;
  color: ${({ color }) => {
      switch(color) {
        case 'Primary':
          return `${theme.colors.textColor}`;
        
        case 'Secondary':
          return `${theme.colors.textColor}`;

        default:
          return `${theme.colors.light}`;
      };
  }} !important;
  transition: all .2s linear;
`

export const RouterLink = styled(LinkContainer).attrs({ as: 'a'})`
  min-width: 200px;

  @media (max-width: 1024px) {
    min-width: unset;
  }
`;

export const Badge = styled(FlexContainer)`
  background: ${theme.colors.badge};
  color: ${theme.colors.primary};
`

export const StyledButton = styled(RouterLink).attrs({ as: 'button'})`
  font-size: ${({ size }) => size};
  height: ${({ height }) => height};
  border: none;
  cursor: ${(props) => props.default ? 'default' : 'pointer'} !important;

  &:hover {
    transform: ${(props) => props.scale ? 'scale(.95)' : 'none'} !important;
  }
`;

export const MenuButton = styled(StyledButton)`
  display: none;
  color: ${theme.colors.primary} !important;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const GridContainer = styled.div`
  display: ${(props) => props.grid ? 'grid' : 'flex'};
  grid-template-columns: ${({ columns }) => columns};
  margin-top: ${({ top }) => top};
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ gap }) => gap};
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: ${(props) => props.responsiveGrid ? 'repeat(2, 1fr)' : ''};
  }

  @media (max-width: 768px) {
    grid-template-columns: ${(props) => props.responsiveGrid ? '1fr' : ''}
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: .5rem;
  overflow: hidden;
  width: 100%;
  max-width: ${(props) => props.maxWidth ? '380px' : ''};
  border: ${(props) => props.border ? `1px solid ${theme.colors.secondary}` : ''};
  
  @media (max-width: 600px) {
    max-width: ${(props) => props.maxWidth ? '100%' : ''};
  };
`;

export const GridDesc = styled.div`
  padding: 50px 44px;

  @media (max-width: 1024px) {
    text-align: left;
    padding: 1.5rem;
  };
`;

export const Icon = styled(FlexContainer)`
  color: ${(props) => props.point ? `${theme.colors.primary}` : ''};
`;

export const ContainerContact = styled(FlexContainer)`
  width: 100%;
  max-width: 1180px;
  padding: 70px 150px;
  background-color: ${theme.colors.light};
  border-radius: 1rem;
  box-shadow: 0 10px 25px 0 ${theme.colors.shadow};

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const DivImage = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 1rem;

  @media (max-width: 768px) {
    height: 228px;
  }
`;

export const Banner = styled(FlexContainer)`
  display: grid;
  place-items: center;
  width: 100%;
  background: ${theme.colors.banner};
  -webkit-backdrop-filter: blur(.75rem);
  backdrop-filter: blur(.75rem);
  color: ${theme.colors.light};
  font-size: 2.5rem;
  font-weight: bold;
  padding: 1rem 1.5rem;

  position: absolute;
  bottom: 30%;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const Price = styled.div`
  background: ${theme.colors.bgColor}50;
  color: ${theme.colors.primary};
  font-weight: bold;
  padding: .25rem .75rem;
  border-radius: 8rem;
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  gap: 2rem;
`;