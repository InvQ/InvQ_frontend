import React, { MouseEventHandler } from 'react';
import * as S from './styled';

interface SelectMenuProps {
  isOnAnswer: MouseEventHandler<HTMLDivElement>;
  isOnRequest: MouseEventHandler<HTMLDivElement>;

  isAnswer: boolean;
  isRequest: boolean;
}

export const SelectMenuComponent: React.FC<SelectMenuProps> = ({
  isOnAnswer,
  isAnswer,
  isOnRequest,
  isRequest,
}) => {
  return (
    <S.SelectMenuContainer>
      <S.SelectMenu>
        <S.SelectLeft onClick={isOnAnswer} isClick={isAnswer}>
          면접질문
        </S.SelectLeft>
        <S.SelectVertical />
        <S.SelectRight onClick={isOnRequest} isClick={isRequest}>
          질문추가
        </S.SelectRight>
      </S.SelectMenu>
    </S.SelectMenuContainer>
  );
};
