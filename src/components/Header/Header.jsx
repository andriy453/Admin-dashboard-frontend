import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../redux/auth/operations';
import {
  BtnMenu,
  LogOutWrap,
  SidebarWrap,
  SvgClose,
  SvgMenu,
  Wrap,
  WrapperHeader,
  SvgWrapLogOut,
  LogOutBtn,
  SvgLogOut,
  LogoImg,
  LogoLink,
  LogoLinkId,
  LogoPicture,
  LogoText,
  Text,
  TextWrap,
} from './Header.styled';
import { useState, useEffect } from 'react';
import sprite from '../../assets/sprite.svg';
import {
  selectIsLoggedIn,
  selectUserEmail,
} from '../../redux/auth/authSelectors';

import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import logopng from '../../assets/Mask group (1).png';
import logopng2x from '../../assets/Mask group2x.png';
import logopngd from '../../assets/logo.png';
import logopngd2x from '../../assets/logo@2x.png';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await dispatch(signOut());
      navigate('/login');
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectUserEmail);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  let location = window.location.href.slice(47, window.location.href.length);
  console.log(isLoggedIn);
  useEffect(() => {
    if (isMenuOpen === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);
  console.log(location)
  return (
    <>
      <WrapperHeader $isActive={isLoggedIn}>
        <Wrap>
          <>
            {isLoggedIn ? (
              <>
                <BtnMenu onClick={handleMenuToggle}>
                  {isMenuOpen ? (
                    <SvgClose>
                      <use href={sprite + '#icon-x'}></use>
                    </SvgClose>
                  ) : (
                    <SvgMenu>
                      <use
                        href={
                          sprite +
                          '#icon-iconamoon_menu-burger-horizontal-duotone'
                        }
                      ></use>
                    </SvgMenu>
                  )}
                </BtnMenu>
                <LogoLinkId to="/">
                  <LogoPicture>
                    <source
                      srcSet={logopngd2x}
                      media="(min-resolution: 2dppx)"
                    />

                    <LogoImg src={logopngd} alt="User" />
                  </LogoPicture>
                  <div>
                    <LogoText>Medicine Store</LogoText>
                    <TextWrap>
                      <Text>
                        {location === 'dashboard' && 'Dashboard'}
                        {location === 'orders' && 'All orders'}
                        {location === 'customers' && 'All customers'}
                        {location === 'suppliers' && 'All suppliers'}
                        {location === 'products' && 'All products'}
                      </Text>
                      <Text>{email}</Text>
                    </TextWrap>
                  </div>
                </LogoLinkId>
              </>
            ) : (
              <LogoLink to="/">
                <LogoPicture>
                  <source srcSet={logopng2x} media="(min-resolution: 2dppx)" />

                  <LogoImg src={logopng} alt="User" />
                </LogoPicture>
                <LogoText>E-Pharmacy</LogoText>
              </LogoLink>
            )}
          </>
        </Wrap>
        {isLoggedIn && (
          <LogOutWrap>
            <SvgWrapLogOut>
              <LogOutBtn onClick={handleLogout}>
                <SvgLogOut>
                  <use href={sprite + '#icon-logout'}></use>
                </SvgLogOut>
              </LogOutBtn>
            </SvgWrapLogOut>
          </LogOutWrap>
        )}
      </WrapperHeader>
      {isLoggedIn && (
        <>
          <SidebarWrap>
            <Sidebar />
          </SidebarWrap>
          {isMenuOpen && <Sidebar open={isMenuOpen} />}
        </>
      )}
    </>
  );
};
