import styled from '@emotion/styled';

export const ModalWarp = styled.div`
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index: 1000;
  overflow: hidden;
`;

export const MenuModalBox = styled.div`
  @media screen and (min-width: 425px) {
    width: 425px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
  @media screen and (max-width: 376px) {
    width: 375px;
  }
  @media screen and (max-width: 320px) {
    width: 320px;
  }
  height: 200px;
  z-index: 1001;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #ffffff;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto auto 50px;
`;

export const TopHorizontalLine = styled.div`
  @media screen and (min-width: 425px) {
    width: 300px;
  }
  @media screen and (max-width: 425px) {
    width: 290px;
  }
  @media screen and (max-width: 400px) {
    width: 260px;
  }
  @media screen and (max-width: 320px) {
    width: 200px;
  }
  height: 1.6px;

  background-color: #000;
`;

export const TopMenusContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 35px;
`;

export const TopMenu = styled.span`
  line-height: 30px;
  text-align: left;
  font-size: 17px;
  font-weight: bold;
  color: #000;

  cursor: pointer;
  width: 100%;
`;
