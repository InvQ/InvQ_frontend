import styled from '@emotion/styled';

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
