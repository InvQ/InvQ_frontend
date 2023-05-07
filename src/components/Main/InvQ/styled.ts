import styled from '@emotion/styled';

export const InvQElement = styled.div`
  width: 90%;

  margin: 10px auto 10px auto;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  transition: all 0.3s;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const InvQuestionElement = styled.div`
  width: 90%;

  margin: 0 auto 0 auto;
`;
export const InvQuestion = styled.h1<{ isClick: boolean }>`
  padding-top: 20px;
  padding-bottom: 20px;

  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
  color: ${(props) => (props.isClick ? '#000' : '#fff')};

  padding-top: 25px;
  padding-bottom: 25px;
`;

export const InvAElement = styled.div<{ isShow: boolean }>`
  width: 90%;
  display: ${(props) => (props.isShow ? 'none' : 'flex')};
  opacity: ${(props) => (props.isShow ? '0' : '1')};

  margin: auto;
`;

export const InvA = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #fff;
  text-align: left;
  margin: 0 auto auto auto;
`;
