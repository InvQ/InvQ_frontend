import React, { MouseEventHandler } from 'react';
import * as S from './styled';

interface NavbarProps {
  toggleOnClick: MouseEventHandler<HTMLDivElement>;
  NavigateOnClick: MouseEventHandler<HTMLDivElement>;
  toggleState: boolean;
  NavbarTitle: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  NavigateOnClick,
  toggleOnClick,
  toggleState,
  NavbarTitle,
}) => {
  return (
    <S.HeaderSection>
      <S.Navbar>
        <S.ServiceNameContainer>
          <S.ServiceName onClick={NavigateOnClick}>{NavbarTitle}</S.ServiceName>
        </S.ServiceNameContainer>
        <S.ToggleMenuContainer>
          <S.ToggleMenu>
            <S.Menu onClick={toggleOnClick}>
              <S.MenuLineOne isToggle={toggleState}></S.MenuLineOne>
              <S.MenuLineTwo isToggle={toggleState}></S.MenuLineTwo>
              <S.MenuLineThree isToggle={toggleState}></S.MenuLineThree>
            </S.Menu>
          </S.ToggleMenu>
        </S.ToggleMenuContainer>
      </S.Navbar>
    </S.HeaderSection>
  );
};
