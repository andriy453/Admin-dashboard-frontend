import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledSidebar = styled.div`
  display: flex;
  align-items: center;
  width: 78px;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  height: 100vh;
  background: #f7f8fa;
  justify-content: space-between;
  border-right: 1px solid rgba(29, 30, 33, 0.1);
  z-index: 100;

  @media screen and (min-width: 768px) {
    width: 84px;
  }
`;

export const LogOutWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const SidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
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


export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    align-items: center;
  }
`;

export const NavDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 14px;
`;

export const NavItem = styled(NavLink)`
  background: #fff;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover > svg,
  &:focus > svg,
  &.active > svg {
    fill: rgba(89, 177, 122, 1);
    transition: all 250ms linear;
  }
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const SvgNav = styled.svg`
  width: 14px;
  height: 14px;
  fill: rgba(220, 221, 223, 1);
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;