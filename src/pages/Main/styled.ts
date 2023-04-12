import styled from '@emotion/styled';

export const MainPageContainer = styled.section`
  width: 100%;
`;

export const MainPageTipContainer = styled.div`
  width: 80%;
  height: 8vh;
  display: flex;

  margin: auto;
`;
export const MainPageTip = styled.h3`
  font-size: 11px;
  font-weight: medium;

  margin: auto auto auto 0;
  color: #888;
  text-align: left;
`;

export const InvQContainer = styled.div`
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
