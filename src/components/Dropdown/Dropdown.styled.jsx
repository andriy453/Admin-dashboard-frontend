import styled from 'styled-components';

export const Customdropdown = styled.div`
  position: relative;
  border-radius: 60px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  background: #fff;
  padding: 13px 18px;
  width: 100%;
  color: rgba(18, 20, 23, 0.2);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  @media (min-width: 768px) {
    width: 224px;
  }
`;

export const Dropdownheader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0px 12px;

  cursor: pointer;
  border-radius: 14px;
  min-width: 164px;
`;
export const DropdownText = styled.p`
    color: rgba(29, 30, 33, 0.4);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  margin: 0px;
`;

export const Dropdownlist = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px 0px;

  width: 100%;
  padding: 14px 8px 14px 18px;

  overflow: auto;

  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;

  border-radius: 15px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #ffffff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  background: rgb(89, 177, 122);

  transition: all 300ms;
`;

export const SvgDown = styled.svg`
  width: 20px;
  height: 20px;
  stroke-width: 0;
  transform:rotate(90deg);
  transition: transform 300ms;
  fill: ${(props) => (props.$modal ? 'rgb(252, 252, 252)' : undefined)};
  transform: ${(props) => props.$active && 'rotate(270deg)'};
`;

export const DropdownItem = styled.li`
  cursor: pointer;
  transition: color 300ms;
  color: rgba(255, 255, 255, 0.5);

  width: 100%;
  &:hover {
    color: rgb(255, 255, 255);
  }
`;
