import React, { Suspense, useEffect, useRef, useState } from 'react';
import * as S from './styled';

interface InvQArrData {
  question: string;
  answer: string;
}

export const InvQ: React.FC<InvQArrData> = ({ question, answer }) => {
  const [questionClose, setQuestionClose] = useState<boolean>(true);
  const answerContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!answerContainerRef.current) return;
    answerContainerRef.current.style.minHeight = questionClose ? '60px' : `200px`;
    answerContainerRef.current.style.backgroundColor = questionClose ? '#fff' : '#3B88FF';
  }, [questionClose]);
  return (
    <S.InvQElement
      isClick={questionClose}
      onClick={() => {
        setQuestionClose(!questionClose);
      }}
      ref={answerContainerRef}
    >
      <S.InvQuestionElement>
        <S.InvQuestion isClick={questionClose}>{question}</S.InvQuestion>
      </S.InvQuestionElement>
      <S.InvAElement isShow={questionClose}>
        <S.InvA>{answer}</S.InvA>
      </S.InvAElement>
    </S.InvQElement>
  );
};
