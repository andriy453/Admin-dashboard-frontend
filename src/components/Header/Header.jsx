import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';

export const Header = () => {

  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/first">
          First
        </StyledLink>
        <StyledLink to="/second">
          Second
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
