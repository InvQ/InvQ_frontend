import React, { MouseEventHandler } from 'react';
import * as S from './styled';

interface ButtonFormProps {
  CreateInvOnClick: MouseEventHandler<HTMLButtonElement>;
  SubmitText: string;
}

export const Button: React.FC<ButtonFormProps> = ({ CreateInvOnClick, SubmitText }) => {
  return (
    <S.ButtonContainer>
      <S.Button onClick={CreateInvOnClick}>
        <S.ButtonText>{SubmitText}</S.ButtonText>
      </S.Button>
    </S.ButtonContainer>
  );
};
