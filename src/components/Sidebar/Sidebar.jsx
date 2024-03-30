
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../redux/auth/operations';

import {
  LogOutWrap,
  SidebarWrap,
  StyledSidebar,
  SvgWrapLogOut,
  LogOutBtn,
  SvgLogOut,
  StyledNav,
  NavDiv,
  NavItem,
  SvgNav,
} from './Sidebar.styled';
import sprite from '../../assets/sprite.svg'

const Sidebar = () => {
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
  return (
    <>
      <StyledSidebar>
        <SidebarWrap>
          <StyledNav>
            <NavDiv>
              <NavItem to="/dashboard" replace>
                <SvgNav>
                  <use href={sprite + '#icon-ic_round-dashboard'}></use>
                </SvgNav>
              </NavItem>
              <NavItem to="/orders" replace>
                <SvgNav>
                  <use href={sprite + '#icon-ic_round-shopping-cart'}></use>
                </SvgNav>
              </NavItem>
              <NavItem to="/products" replace>
                <SvgNav>
                  <use href={sprite + '#icon-mingcute_flask-fill'}></use>
                </SvgNav>
              </NavItem>
              <NavItem to="/suppliers" replace>
                <SvgNav>
                  <use href={sprite + '#icon-mdi_local-pharmacy'}></use>
                </SvgNav>
              </NavItem>
              <NavItem to="/customers" replace>
                <SvgNav>
                  <use href={sprite + '#icon-mdi_users'}></use>
                </SvgNav>
              </NavItem>
              
            </NavDiv>
          </StyledNav>
        </SidebarWrap>
        <LogOutWrap>
          <SvgWrapLogOut>
            <LogOutBtn onClick={handleLogout}>
              <SvgLogOut>
                <use href={sprite + "#icon-logout"}></use>
              </SvgLogOut>
            </LogOutBtn>
          </SvgWrapLogOut>
        </LogOutWrap>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
