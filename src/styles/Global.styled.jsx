import styled from 'styled-components';

import {
  Primary,
  Secondary,
  StrokeBorder,
  ColorGrey,
  BlueColor,
  LightGrey,
} from '../utils/Theme';

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  background-color: ${({ theme }) => theme.colors.bgColor};
  color: ${ColorGrey};

  @media (max-width: 1024px) {
    margin-top: 48px;
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
    padding-top: ${(props) => props.responsive ? '4rem' : ''};
    padding-bottom: ${(props) => props.responsive ? '4rem' : ''};
    padding: ${(props) => props.responsivePadding ? '1rem' : '' };
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
  align-items: ${({ align }) => align};
  border-radius: ${({ radius }) => radius};
  border: ${(props) => props.border ? `1px solid ${StrokeBorder}` : ''};
  gap: ${({ gap }) => gap};

  @media (max-width: 1175px) {
    display: ${(props) => props.respImg ? 'none' : ''};
  }
  
  @media (max-width: 600px) {
    width: ${(props) => props.respAction ? '100%' : ''};
    flex-direction: ${(props) => props.respAction ? 'column' : ''};
  }
`;

export const StyledHeader = styled(FlexContainer).attrs({ as: 'header' })`
  position: fixed;
  top: 0;
  border-bottom: 1px solid ${LightGrey};
  z-index: 2;

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
  margin-bottom: ${({ bottom }) => bottom};
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
      
      case 'p':
        return '1rem';

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

        case 'p':
          return '1rem';

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
    width: ${(props) => props.responsive ? '100%' : ''};
  };
`;

export const LinkContainer = styled(FlexContainer)`
  font-size: 18px;
  font-weight: 500;
  background-color: ${props => props.primary ? Primary : props.secondary ? Secondary : 'transparent'} !important;
  color: ${props => (props.primary || props.secondary) ? ColorGrey : 'white'} !important;
  transition: all .2s linear;

  &:hover {
    transform: scale(.95);
  }

  @media (max-width: 600px) {
    width: ${(props) => props.respLink ? '100%' : ''};
  };
`;

export const RouterLink = styled(LinkContainer).attrs({ as: 'a'})`
  @media (max-width: 600px) {
    width: ${(props) => props.respLink ? '100%' : ''};
  };
`;

export const Button = styled(RouterLink).attrs({ as: 'button'})`
  font-size: ${({ size }) => size};
  height: ${({ height }) => height};
  border: none;
  cursor: ${(props) => props.default ? 'default' : 'pointer'} !important;

  &:hover {
    transform: ${(props) => props.scale ? 'scale(.95)' : 'none'} !important;
  }
`;

export const MenuButton = styled(Button)`
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

export const StyledFooter = styled(FlexContainer).attrs({ as: 'footer'})``;