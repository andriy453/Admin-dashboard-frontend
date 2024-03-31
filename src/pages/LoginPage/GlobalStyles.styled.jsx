import { createGlobalStyle } from "styled-components";

import VectorDesktop from "../../assets/login-becraund.png";


export const GlobalStyles = createGlobalStyle`
body {
 padding:0;
  font-family: Inter;
  letter-spacing: 0.04em;
  max-width: 100vw;
  background-color:#F8F8F8;
  color: rgba(18, 20, 23, 0.80);
  font-size: 16px;
  line-height: 24px;
  padding: 24px 20px;
  background-image: url(${VectorDesktop});
  /* height: 100%; */
  background-repeat: no-repeat;
  background-size: 300px 150px;
  background-position: 100% 105%;
  @media screen and (min-width: 768px) {
    padding: 24px 32px;
    background-image: url(${VectorDesktop});
    background-size: 465px 365px;
    background-position: 100% 125%;
  }
  @media screen and (min-width: 1440px) {
    padding: 28px 100px;

  }
  
  }`;