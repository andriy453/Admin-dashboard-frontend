import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  padding-top: 148px;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    padding-top: 204px;
    padding-right: 32px;

    @media screen and (min-width: 1400px) {
      flex-direction: row-reverse;
      justify-content: space-between;
      padding-top: 226px;
      padding-right: 253px;
      padding-left: 100px;
    }
  }
`;
export const Wrapperimg = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  position: relative;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.21;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: 54px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.11;
    max-width: 614px;
  }

  span {
    color: var(--grean);
  }
`;

export const Picture = styled.picture`
  width: 95px;
  height: 93px;
  position: absolute;
  right: -20px;
  top: -60px;
  @media screen and (min-width: 768px) {
    width: 179px;
    height: 175px;
  }
  @media screen and (min-width: 1440px) {
    width: 179px;
    height: 175px;
    display: flex;
    margin-bottom: 16px;
  }
`;

export const Img = styled.img`
  width: 95px;
  height: 93px;
  @media screen and (min-width: 768px) {
    width: 179px;
    height: 175px;
  }

`;
