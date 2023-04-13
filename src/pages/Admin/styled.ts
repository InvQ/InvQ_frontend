import styled from '@emotion/styled';

export const AdminContainer = styled.section`
  width: 100%;
  height: 69%;
`;

export const AdminPageTipContainer = styled.section`
  width: 80%;
  height: 8vh;
  display: flex;

  margin: 50px auto auto auto;
`;
export const AdminPageTip = styled.h3`
  font-size: 12px;
  font-weight: medium;

  margin: auto auto auto 0;
  color: #888;
  text-align: left;
`;

export const InvRContainer = styled.div`
  width: 90%;
  height: 70vh;

  margin: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
`;

//button
export const AdminButtonPosition = styled.section`
  position: relative;
  margin-top: -25px;
`;

export const AdminButtonContainer = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  & > * {
    margin: auto auto 20px auto;
    font-family: Pretendard;
    cursor: pointer;
  }
`;

export const CancelButton = styled.button`
  width: 35%;
  height: 100%;

  display: flex;

  border: none;
  border-radius: 10px;
  background-color: #ddd;
`;
export const CancelText = styled.h3`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  margin: auto;

  color: #3b88ff;
`;

export const AgreeButton = styled.button`
  width: 35%;
  height: 100%;

  display: flex;

  border: none;
  border-radius: 10px;
  background-color: #3b88ff;
`;
export const AgreeText = styled.h3`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  margin: auto;

  color: #fff;
`;
