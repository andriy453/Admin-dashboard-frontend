import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  padding: 17px 0px 17px 72px;
  border-bottom: ${(props) => props.$isActive  ? "1px solid rgba(29, 30, 33, 0.1)" : "none" } ; 


  background: #f7f8fa;
  
  @media screen and (min-width: 768px) {
    padding: 15px 0px 15px 80px;
  }
  @media screen and (min-width: 1440px) {
    padding: 15px 40px 15px 20px;
    z-index: 3;
  }
`;

export const LogOutWrap = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const SvgMenu = styled.svg`
  width: 32px;
  height: 32px;
  stroke: #1d1e21;
  fill: #1d1e21;
  
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const SvgClose = styled.svg`
  width: 32px;
  height: 32px;
  stroke: rgba(29, 30, 33, 1);
  
`;

export const BtnMenu = styled.button`
  position: absolute;
  top: 24px;
  left: 20px;
  z-index: 2;
  @media screen and (min-width: 1440px) {
    display: none;
  }
  &:hover > svg,
  &:focus > svg {
    opacity: 0.4;
    transition: all 250ms linear;
  }
  background: transparent;
  border: none;
`;

export const SidebarWrap = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;
export const SvgLogOut = styled.svg`
  width: 14px;
  height: 14px;
  fill: rgba(255, 255, 255, 1);
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const SvgWrapLogOut = styled.div`
  background: #59b17a;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    opacity: 0.4;
    transition: all 250ms linear;
  }
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const LogOutBtn = styled.button`
  background: transparent;
  border: none;
`;

export const LogoSvg = styled.svg`
  width: 36px;
  height: 36px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  transition: all 250ms linear;
  gap: 14px;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
export const LogoLinkId = styled(NavLink)`
  display: flex;
  align-items: center;
  transition: all 250ms linear;
  gap: 32px;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
  @media screen and (min-width: 1440px) {
    gap: 60px;
  }
`;
export const LogoText = styled.p`
  color: #1d1e21;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.6px;
`;

export const LogoPicture = styled.picture`
  width: 44px;
  height: 44px;
`;

export const LogoImg = styled.img`
  width: 44px;
  height: 44px;
`;

export const Text = styled.p`
  color: rgba(29, 30, 33, 0.4);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  padding: 0 8px;
  border-right: 1px solid #ccc;
  &:last-child {
    border-right: none;
    padding-right: 0;
  }
  &:first-child {
    padding-left: 0;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4px;
`;