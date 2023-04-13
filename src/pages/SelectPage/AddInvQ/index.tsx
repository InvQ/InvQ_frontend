import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import { AddInvqInputForm, Button } from '@components/common';

interface AddInvQProps {
  setInvQuestion: React.Dispatch<React.SetStateAction<string>>;
  setInvAnswer: React.Dispatch<React.SetStateAction<string>>;
  createInv: MouseEventHandler<HTMLButtonElement>;
  invQuestion: string;
  invAnswer: string;
}

export const AddInvQPage: React.FC<AddInvQProps> = ({
  setInvQuestion,
  setInvAnswer,
  createInv,
  invQuestion,
  invAnswer,
}) => {
  const [questionClose, setQuestionClose] = useState<boolean>(true);
  const answerContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!answerContainerRef.current) return;
    answerContainerRef.current.style.minHeight = questionClose ? '70px' : `230px`;
    answerContainerRef.current.style.backgroundColor = questionClose ? '#fff' : '#3B88FF';
  }, [questionClose]);
  return (
    <S.AddInvqPageContainer>
      <S.InvQElement
        isClick={questionClose}
        onClick={() => {
          setQuestionClose(!questionClose);
        }}
        ref={answerContainerRef}
      >
        <S.InvQuestionElement>
          <S.InvQuestion isClick={questionClose}>{invQuestion}</S.InvQuestion>
        </S.InvQuestionElement>
        <S.InvAElement isShow={questionClose}>
          <S.InvA>{invAnswer}</S.InvA>
        </S.InvAElement>
      </S.InvQElement>
      <AddInvqInputForm setInvQuestion={setInvQuestion} setInvAnswer={setInvAnswer} />
      <Button CreateInvOnClick={createInv} SubmitText="등록요청" />
    </S.AddInvqPageContainer>
  );
};
