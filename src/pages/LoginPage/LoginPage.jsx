import { Container, Title, Picture, Img,Wrapperimg } from './LoginPage.styled';
import LoginForm from '../../components/LoginForm/LoginForm';
import tabletsMobile1x from '../../assets/tablets-mobile1x.png';
import tabletsMobile2x from '../../assets/tablets-tablet2x.png';
import tabletsTablet1x from '../../assets/tablets-tablet1x.png';
import tabletsTablet2x from '../../assets/tablets-tablet2x.png';
import tabletsDesktop1x from '../../assets/tablets-desktop1x.png';
import tabletDesktop2x from '../../assets/tablets-desktop2x.png';
const LoginPage = () => {
  return (
    <Container>
            <LoginForm />
      <Wrapperimg>
      <Title>
        Your medication, delivered Say goodbye to all
        <span>your healthcare </span>worries with us
      </Title>

<Picture>
        <source
          srcSet={tabletDesktop2x}
          media="(min-width: 1200px) and (min-resolution: 2dppx)"
        />
        <source srcSet={tabletsDesktop1x} media="(min-width: 1200px)" />
        <source
          srcSet={tabletsTablet2x}
          media="(max-width: 768px) and (min-resolution: 2dppx)"
        />
        <source srcSet={tabletsTablet1x} media="(max-width: 768px)" />
        <source
          srcSet={tabletsMobile2x}
          media="(max-width: 375px) and (min-resolution: 2dppx)"
        />
        <source srcSet={tabletsMobile1x} media="(max-width: 375px)" />
        <Img src={tabletsMobile1x} alt="User" />
      </Picture>
</Wrapperimg>


    </Container>
  );
};

export default LoginPage;
