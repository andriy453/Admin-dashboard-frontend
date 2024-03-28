import {
  HeaderContainer,
  Navigation,
  BtnMenu,
  LogOutWrap,
  SidebarWrap,
  SvgClose,
  SvgMenu,
  Wrap,
  WrapperHeader,
} from './Header.styled';
import { useState } from "react";
import sprite from '../../assets/sprite.svg'
import { selectIsLoggedIn,selectUserName} from '../../redux/auth/authSelectors';

import { useSelector } from 'react-redux';
import Sidebar from "../Sidebar/Sidebar";

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUserName);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <HeaderContainer>
      <Navigation>
        {isLoggedIn ? 
           <div>
           <WrapperHeader>
             <Wrap>
               <BtnMenu onClick={handleMenuToggle}>
                 {isMenuOpen ? (
                   <SvgClose>
                     <use href={sprite + "#icon-x"}></use>
                   </SvgClose>
                 ) : (
                   <SvgMenu>
                     <use href={sprite + "#icon-menu"}></use>
                   </SvgMenu>
                 )}
               </BtnMenu>
             </Wrap>
             <LogOutWrap>
             </LogOutWrap>
           </WrapperHeader>
           <SidebarWrap>
             <Sidebar />
           </SidebarWrap>
           {isMenuOpen && <Sidebar open={isMenuOpen} />}
         </div>
        : <> 
          {/* <svg>
        <use href={sprite + "#icon-logo"}></use>
      </svg> */}
       <p>E-Pharmacy</p></>}

      </Navigation>
    </HeaderContainer>
  );
};
