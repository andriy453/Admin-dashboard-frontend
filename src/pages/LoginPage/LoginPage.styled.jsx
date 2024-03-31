import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  padding: 138px 0;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    padding: 174px 0;

    @media screen and (min-width: 1440px) {
      flex-direction: row-reverse;
      justify-content: space-between;
      padding: 200px 0;
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
  top: -30%;
  right: 0;
  @media screen and (min-width: 768px) {
    width: 179px;
    height: 175px;
    top: -40%;
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
