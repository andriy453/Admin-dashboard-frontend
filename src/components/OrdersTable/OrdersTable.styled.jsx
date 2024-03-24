import styled from "styled-components";


export const Table = styled.table`
  width: calc(100% + 2px);
  border-radius: 0 0 8px 8px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  background: #fff;
  overflow: hidden;
  border-spacing: 0;
  padding: 0 20px;
  min-width: 671px;
  width: 100vw;

  @media screen and (min-width:1440px) {
    width: calc((100vw - 265px));
  }
`;

export const Th = styled.th`
  color: rgba(29, 30, 33, 0.4);

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  background: rgba(255, 255, 255, 1);
  padding: 23px 14px;
  border-bottom: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  &:last-child {
    border-right: none;
  }
`;

export const Title = styled.h2`
  color: #1d1e21;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;
  border: 0px solid rgba(29, 30, 33, 0.08);
  border-radius: 8px 8px 0px 0px;

  background: #e7f1ed;
  padding: 20px;
  min-width: 671px;
  width: 100vw;

  @media screen and (min-width:1440px) {
    width: calc(100vw - 265px);
  }
`;
export const IconWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Td = styled.td`
  color: #1d1e21;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.12;
  position: relative;
  border-bottom: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  background: #fcfcfc;
  &:last-child {
    border-right: none;
  }

  padding: 14px 14px 14px 14px;
`;
export const Tr = styled.tr`
  padding-right: 20px;
  padding-left: 20px;
  &:last-child {
    td {
      border-bottom: none;
    }
  }
`;

export const TableWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    position: absolute;
    top: 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 14px;
    background: #e6e6e6;
  }

  &::-webkit-scrollbar-track {
    border-radius: 14px;
    background: #f1f1f1;
  }
`;

export const NameColumn = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    align-items: center;
  }
`;