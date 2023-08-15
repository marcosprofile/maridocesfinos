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
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom};
  padding-left: ${({ left }) => left};
  padding-right: ${({ right }) => right};

  @media (max-width: 1024px) {
    padding: 0 16px;
  }
`;

export const FlexContainer = styled(PaddingContainer)`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  border-radius: ${({ radius }) => radius};
  gap: ${({ gap }) => gap};
  border: ${(props) => props.border ? `1px solid ${Secondary}` : ''};
`;

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  background: ${BlueColor};
  height: 80px;
  border-bottom: 1px solid ${LightGrey};
  z-index: 2;
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

export const Title = styled(TextColor).attrs({ as: 'h2'})`
`;

export const Paragraph = styled(TextColor).attrs({ as: 'p'})`
`;

export const Image = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: cover;

  @media (max-width: 768px) {
    height: ${(props) => props.respWidth ? '32px' : ''}
  }
`;

export const LinkContainer = styled(PaddingContainer)`
  border-radius: .5rem;
  font-size: 18px;
  font-weight: 500;
  background-color: ${props => props.primary ? Primary : props.secondary ? Secondary : 'transparent'};
  color: ${props => (props.primary || props.secondary) ? ColorGrey : 'white'};
`;

export const RouterLink = styled(LinkContainer).attrs({ as: 'a'})`

`;

export const Button = styled(LinkContainer).attrs({ as: 'button'})`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  height: 24px;
`;

export const NavBar = styled.nav`

`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 380px 380px 380px;
  width: 100%;
  grid-gap: 16px;
`;