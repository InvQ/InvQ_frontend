import styled from '@emotion/styled';

export const HeaderSection = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;

  margin-top: 0;
`;

export const Navbar = styled.nav`
  width: 100%;
  display: flex;

  margin-top: auto;
  margin-bottom: auto;
`;

export const ServiceNameContainer = styled.div`
  width: 50%;
`;

export const ServiceName = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #000;

  text-align: left;
`;

export const ToggleMenuContainer = styled.div`
  width: 50%;
  display: flex;
  position: relative;
`;
export const ToggleMenu = styled.div`
  width: 15px;
  height: 12px;
  display: flex;
  position: absolute;
  right: 0;
  top: 5px;
`;
export const Menu = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  & > * {
    width: 100%;
    height: 1.5px;

    border-radius: 50%;
    background: #000;
    transition: all 0.3s;
  }
`;
export const MenuLineOne = styled.div<{ isToggle: boolean }>`
  ${(props) => (props.isToggle ? 'transform: translateY(4px) rotate(45deg) ' : '')};
`;

export const MenuLineTwo = styled.div<{ isToggle: boolean }>`
  ${(props) => (props.isToggle ? 'opacity: 0' : '')};
  ${(props) => (props.isToggle ? 'transform: translateX(-20px)' : '')};
`;
export const MenuLineThree = styled.div<{ isToggle: boolean }>`
  ${(props) => (props.isToggle ? 'transform: translateY(-4px) rotate(-45deg)' : '')};
`;