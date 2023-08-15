import styled from 'styled-components';

import {
  Primary,
  Secondary,
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

  @media (max-width: 1024px) {
    padding-left: ${(props) => props.responsive ? '1rem' : ''};
    padding-right: ${(props) => props.responsive ? '1rem' : ''};
    width: ${(props) => props.responsive ? '100%' : ''};
  };
`;

export const FlexContainer = styled(PaddingContainer)`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  border-radius: ${({ radius }) => radius};
  gap: ${({ gap }) => gap};
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

export const TextColor = styled.div`
  color: ${(props) => props.grey ? ColorGrey : 'white'};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  font-style: ${({ fontStyle }) => fontStyle};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  text-transform: ${({ fontTransform }) => fontTransform};
`;

export const Heading = styled(PaddingContainer)`
  color: ${(props) => props.grey ? ColorGrey : 'white'};
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align};
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

export const Title = styled(TextColor).attrs({ as: 'h2'})``;

export const Paragraph = styled(TextColor).attrs({ as: 'p'})``;

export const Image = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: cover;

  @media (max-width: 768px) {
    height: ${(props) => props.respWidth ? '40px' : ''}
  }
`;

export const LinkContainer = styled(PaddingContainer)`
  border-radius: .5rem;
  font-size: 18px;
  font-weight: 500;
  background-color: ${props => props.primary ? Primary : props.secondary ? Secondary : 'transparent'};
  color: ${props => (props.primary || props.secondary) ? ColorGrey : 'white'};
`;

export const RouterLink = styled(LinkContainer).attrs({ as: 'a'})``;

export const Button = styled(LinkContainer).attrs({ as: 'button'})`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  height: 24px;
`;

export const MenuButton = styled(Button)`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: .5rem;
  width: 100%;
  max-width: 380px;
  border: ${(props) => props.border ? `1px solid ${Secondary}` : ''};
`;

export const GridDesc = styled.div`
  padding: 50px 44px;

  @media (max-width: 1024px) {
    text-align: left;
    padding: 1.5rem;
  };
`;