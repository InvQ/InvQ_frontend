import styled from '@emotion/styled';

export const InvQElement = styled.div<{ isClick: boolean }>`
  width: 90%;
  min-height: 60px;

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
  width: 80%;
  height: 60px;

  margin: 0 auto 0 auto;
`;
export const InvQuestion = styled.h1<{ isClick: boolean }>`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => (props.isClick ? '#000' : '#fff')};

  padding-top: 22px;
  padding-bottom: 22px;
`;

export const InvAElement = styled.div<{ isShow: boolean }>`
  width: 80%;
  height: 100%;
  display: ${(props) => (props.isShow ? 'none' : 'flex')};
  opacity: ${(props) => (props.isShow ? '0' : '1')};

  margin: auto;
`;

export const InvA = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  color: #fff;
  text-align: left;
  margin: 20px auto auto auto;
`;
