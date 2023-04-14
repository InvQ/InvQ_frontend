import React from 'react';
import * as S from './styled';

interface CloseHandlerProps {
  CloseHandler: React.MouseEventHandler<HTMLElement>;
}

export const CreateModal: React.FC<CloseHandlerProps> = ({ CloseHandler }) => {
  return (
    <S.ModalWarp>
      <S.CreateSuccessModalBox>
        <S.TopContainer>
          <S.CreateSuccessModalTitle>등록요청 완료</S.CreateSuccessModalTitle>
          <S.CreateSuccessDescContainer>
            <S.CreateSuccessModalDesc>
              성공적으로 면접질문이 등록요청 되었어요.
            </S.CreateSuccessModalDesc>
          </S.CreateSuccessDescContainer>
        </S.TopContainer>
        <S.CreateSuccessCloseButton onClick={CloseHandler}>
          <S.CreateSuccessCloseButtonText>확인</S.CreateSuccessCloseButtonText>
        </S.CreateSuccessCloseButton>
      </S.CreateSuccessModalBox>
    </S.ModalWarp>
  );
};
