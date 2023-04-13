import React, { MouseEventHandler } from 'react';
import * as S from './styled';

interface AdminButtonProps {
  CancelText: string;
  AgreeText: string;
  refParam: string;
  DeleteOnClick: MouseEventHandler;
  UpdateOnClick: MouseEventHandler;
}

export const AdminButton: React.FC<AdminButtonProps> = ({
  CancelText,
  AgreeText,
  DeleteOnClick,
  UpdateOnClick,
}) => {
  return (
    <S.AdminButtonContainer>
      <S.CancelButton onClick={DeleteOnClick}>
        <S.CancelText>{CancelText}</S.CancelText>
      </S.CancelButton>
      <S.AgreeButton onClick={UpdateOnClick}>
        <S.AgreeText>{AgreeText}</S.AgreeText>
      </S.AgreeButton>
    </S.AdminButtonContainer>
  );
};
