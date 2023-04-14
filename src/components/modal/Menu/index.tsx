import React from 'react';
import * as S from './styled';

interface CloseHandlerProps {
  CloseHandler: React.MouseEventHandler<HTMLElement>;
  GoAdminOnClick: React.MouseEventHandler<HTMLDivElement>;
  ChangeDarkOnClick: React.MouseEventHandler<HTMLDivElement>;
  RegisterOnClick: React.MouseEventHandler<HTMLDivElement>;
}

export const TopMenuModal: React.FC<CloseHandlerProps> = ({
  CloseHandler,
  GoAdminOnClick,
  ChangeDarkOnClick,
  RegisterOnClick,
}) => {
  return (
    <S.ModalWarp>
      <S.MenuModalBox>
        <S.TopContainer>
          <S.TopHorizontalLine />
          <S.TopMenusContainer>
            <S.TopMenu onClick={GoAdminOnClick}>어드민</S.TopMenu>
            <S.TopMenu onClick={ChangeDarkOnClick}>다크모드</S.TopMenu>
            <S.TopMenu onClick={RegisterOnClick}>새 질문 및 답변 등록</S.TopMenu>
          </S.TopMenusContainer>
        </S.TopContainer>
      </S.MenuModalBox>
    </S.ModalWarp>
  );
};
