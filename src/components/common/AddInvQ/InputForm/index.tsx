import React from 'react';
import * as S from './styled';

interface InvQProps {
  setInvQuestion: React.Dispatch<React.SetStateAction<string>>;
  setInvAnswer: React.Dispatch<React.SetStateAction<string>>;
}

export const AddInvqInputForm: React.FC<InvQProps> = ({ setInvQuestion, setInvAnswer }) => {
  return (
    <>
      <S.InputElementContainer>
        <S.InputElement
          onChange={(event) => setInvQuestion(event.target.value)}
          placeholder="등록할 질문을 입력해 주세요."
        />
      </S.InputElementContainer>
      <S.TextAreaElementContainer>
        <S.TextAreaElement
          onChange={(event) => setInvAnswer(event.target.value)}
          cols={50}
          rows={10}
          maxLength={300}
          placeholder="등록할 답변을 입력해 주세요."
        ></S.TextAreaElement>
      </S.TextAreaElementContainer>
    </>
  );
};
