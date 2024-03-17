import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`

  max-width: 628px;
  @media screen and (min-width: 768px) {
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.6px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.8px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 40px;
  @media screen and (max-width: 374px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;
export const TextRegister = styled.p`
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 16px;
  @media screen and (max-width: 374px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

export const Input = styled.input`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  padding: 13px 18px 13px 18px;
  background-color: rgb(255, 255, 255);

  transition: border 300ms;
  color: rgba(3, 66, 255, 0.4);
  width: 100%;

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  ::placeholder {
    color: rgba(3, 66, 255, 0.4);
  }
  &:hover,
  &:focus {
    border: 1px solid var(--grean);
    outline: none;
    opacity: 1;
    transition:
      outline 250ms linear,
      opacity 250ms linear;
  }

  &.is-invalid {
    border-color: red;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 60px;
  background-color: var(--grean);
  padding: 13px 110px;
  color: var(--white);


  width: 100%;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;

  transition: background 300ms;

  &:hover,
  :focus {
    background-color: var(--grean-hover);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;


export const Validation = styled.p`
  color: #d80027;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.12px;
  margin-top: 4px;
`;

export const WraperDiv = styled.div`
  margin-bottom: 40px;
  position: relative;
`;
export const ConteinerInp = styled.div`
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

export const Erorr = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 4px;
`;
