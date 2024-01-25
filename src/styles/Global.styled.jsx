import styled from 'styled-components';

import {
  Secondary,
  StrokeBorder,
  ColorGrey,
  BlueColor
} from '../utils/Theme';

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bgColor};
  color: ${ColorGrey};
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 4rem;
  };
`;

export const PaddingContainer = styled.div`
  background-color: ${(props) => props.bgBlue ? BlueColor : ''};
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
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  align-items: ${({ align }) => align};
  border-radius: ${({ radius }) => radius};
  border: ${(props) => props.border ? `1px solid ${StrokeBorder}` : ''};
  gap: ${({ gap }) => gap};
  overflow: ${({ overflow }) => overflow};
  font-weight: ${({ fontWeight }) => fontWeight};

  @media (max-width: 1175px) {
    display: ${(props) => props.respImg ? 'none' : ''};
  }
  
  @media (max-width: 600px) {
    width: ${(props) => props.respAction ? '100%' : ''};
    width: ${(props) => props.responsiveCard ? '162px' : ''};
    min-width: ${(props) => props.responsiveCard ? '162px' : ''};
    flex-grow: ${(props) => props.responsiveCard ? '1' : ''};
    margin: ${(props) => props.responsivePadding ? '0' : ''};
    flex-direction: ${(props) => props.respAction ? 'column' : ''};
  }
`;

export const StyledHeader = styled(FlexContainer).attrs({ as: 'header' })`
  position: fixed;
  top: 0;
  background: #081130;
  padding: 0 80px;
  width: 100%;
  height: 80px;
  align-items: center;
  gap: 4rem;
  border-bottom: 1px solid #7E868E10;
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
  color: ${(props) => props.grey ? ColorGrey : 'white'};
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
    height: ${(props) => props.respWidth ? '40px' : ''};
    height: ${(props) => props.respBottom ? '120px' : ''};
    height: ${(props) => props.respHeight ? '200px' : ''};
    height: ${(props) => props.respImgCard ? '128px' : ''};
    width: ${(props) => props.responsive ? '100%' : ''};
  };
`;

export const LinkContainer = styled(FlexContainer)`
  font-size: 18px;
  font-weight: 500;
  background-color: ${({ color }) => {
      switch(color) {
        case 'Primary':
          return '#FED84C';
        
        case 'Secondary':
          return '#F2F6FA';

        default:
          return 'transparent';
      };
  }} !important;
  color: ${({ color }) => {
      switch(color) {
        case 'Primary':
          return '#2E363E';
        
        case 'Secondary':
          return '#2E363E';

        default:
          return '#FFFFFF';
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

export const BgColor = styled(FlexContainer)`
  border-radius: .5rem;
  background-color: ${({ color }) => {
      switch(color) {
        case 'Primary':
          return '#FED84C';
        
        case 'Secondary':
          return '#F2F6FA';

        default:
          return 'transparent';
      };
  }} !important;
  color: ${({ color }) => {
      switch(color) {
        case 'Primary':
          return '#2E363E';
        
        case 'Secondary':
          return '#2E363E';

        default:
          return '#FFFFFF';
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
  background: ${Secondary};
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
  border: ${(props) => props.border ? `1px solid ${Secondary}` : ''};
  
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
  color: ${(props) => props.point ? '#5D6AFB' : ''};
`;

export const ContainerContact = styled(FlexContainer)`
  width: 100%;
  max-width: 1180px;
  padding: 70px 150px;
  background-color: #FFF;
  border-radius: 1rem;
  box-shadow: 0px 10px 25px 0px rgba(195, 200, 215, 0.70);

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
  background: #00000030;
  -webkit-backdrop-filter: blur(.75rem);
  backdrop-filter: blur(.75rem);
  color: #FFFFFF;
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
  background: #5663FB15;
  color: #5663FB;
  font-weight: bold;
  padding: .25rem .75rem;
  border-radius: 8rem;
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  direction: column;
  padding: 1rem;
  align: center;
  gap: 2rem;
  top: 2rem;
`;