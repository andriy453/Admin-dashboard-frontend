import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100vh;
  background-color: rgba(33, 33, 33, 0.12);
  transform: translate(-50%, -50%);
  overflow: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

export const StyledModal = styled.div`
  border-radius: 8px;

  background: rgb(255, 255, 255);
  padding: 40px;
  padding-bottom:60px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  border-radius: 30px;
  z-index: 3;
  width: 335px;
  /* min-height: 300px; */
  @media (min-width: 768px) {
    width: 536px;
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  margin-left: auto;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const Svg = styled.svg`
  width: 26px;
  height: 26px;
  stroke: rgba(29, 30, 33, 1);
  transition: all 250ms linear;
  &:hover,
  &:focus {
    stroke: rgba(29, 30, 33, 0.5);
  }
`;
