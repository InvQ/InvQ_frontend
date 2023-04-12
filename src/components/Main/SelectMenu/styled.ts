import styled from '@emotion/styled';

export const SelectMenuContainer = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
`;

export const SelectMenu = styled.div`
  width: 100%;
  display: flex;
  & > * {
    transition: all 0.3s;
  }
`;
export const SelectLeft = styled.div<{ isClick: boolean }>`
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;
  margin: auto 10px auto auto;
  color: ${(props) => (props.isClick ? '#0064FF' : '#888')};
`;
export const SelectVertical = styled.div`
  width: 2px;
  height: 30%;

  margin: auto;
  background-color: #c6c6c6;
`;
export const SelectRight = styled.div<{ isClick: boolean }>`
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;
  margin: auto auto auto 10px;
  color: ${(props) => (props.isClick ? '#0064FF' : '#888')};
`;
