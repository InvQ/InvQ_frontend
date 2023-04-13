import styled from '@emotion/styled';

export const InputElementContainer = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.01) 0px 10px 15px -3px, rgba(0, 0, 0, 0.01) 0px 4px 6px -2px;
`;
export const InputElement = styled.input`
  width: 80%;
  height: 100%;

  font-family: Pretendard;
  font-weight: 500;
  color: #000;
  margin: auto;
  font-size: 16px;
  border: none;
  outline: none;
  ::placeholder {
    color: #d9d9d9;
    font-size: 12px;
  }
`;

export const TextAreaElementContainer = styled.div`
  margin-top: 10px;
  display: flex;
`;

export const TextAreaElement = styled.textarea`
  width: 100%;
  height: 150px;

  display: flex;
  outline: none;
  margin: auto;
  ::placeholder {
    color: #d9d9d9;
    font-size: 12px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  font-family: Pretendard;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.01) 0px 10px 15px -3px, rgba(0, 0, 0, 0.01) 0px 4px 6px -2px;
`;
