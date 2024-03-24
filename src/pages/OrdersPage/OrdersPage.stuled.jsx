import styled from "styled-components";

export const WrapOrders = styled.div`
  display: flex;
  padding: 40px 20px;
  background: #f7f8fa;
  height: 100vh;
  @media screen and (min-width: 768px) {
    padding: 50px 32px;
  }
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    padding: 75px 120px;
  }
`;

export const SvgDot = styled.svg`
  width: 10px;
  height: 10px;
  fill: rgba(231, 241, 237, 1);

  & .active {
    fill: rgba(89, 177, 122, 1);
    width: 12px;
    height: 12px;
  }

  &:hover,
  &:focus {
    fill: rgba(89, 177, 122, 1);
    width: 12px;
    height: 12px;
  }
  cursor: pointer;
  transition: all 250ms linear;
`;

export const Pagination = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const Input = styled.input`
  border-radius: 60px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  padding: 13px 18px;
  background: #fff;
  outline: none;
  box-shadow: 0px -1px 5px 0px rgba(71, 71, 71, 0.05);
  color: #1d1e21;

  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  &::placeholder {
    color: rgba(29, 30, 33, 0.4);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
  transition: all 250ms linear;
  &:hover,
  &:focus,
  &.active {
    border: 1px solid #59b17a;
  }
`;

export const Button = styled.button`
  padding: 13px 30px;
  border-radius: 60px;
  background: #59b17a;
  color: #fff;
  outline: none;
  border: none;
  transition: all 250ms linear;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    opacity: 0.4;
  }
`;

export const SvgFilter = styled.svg`
  width: 14px;
  height: 14px;
  stroke: rgba(255, 255, 255, 1);
  fill: transparent;
`;

export const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
  margin-bottom: 20px;
`;