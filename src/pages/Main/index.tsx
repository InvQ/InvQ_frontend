import React, { lazy, useEffect, useState } from 'react';

import * as S from './styled';
import { SelectMenuComponent } from '@components/Main';
import { getInvQ } from '@/api/InvQAnswer';
import { InvQ } from '../SelectPage';

interface ItemType {
  id: number;
  question: string;
  answer: string;
  click: boolean;
}

export const MainPage: React.FC = () => {
  const [isAnswer, setIsAnswer] = useState<boolean>(true);
  const [isRequest, setIsRequest] = useState<boolean>(false);
  const [invQs, setInvQs] = useState<ItemType[]>([
    {
      id: 0,
      question: '',
      answer: '',
      click: false,
    },
  ]);
  const isOnAnswer = () => {
    setIsAnswer(true);
    setIsRequest(false);
  };
  const isOnRequest = () => {
    setIsAnswer(false);
    setIsRequest(true);
  };
  useEffect(() => {
    getInvQ('InvQ', 'InvQ_answer_api', 'db').then((res) => {
      setInvQs(res.frontend);
    });
  }, []);
  //이거 state말고 페이지로 만들어야겠다 코딩 개꿀잼이네
  return (
    <S.MainPageContainer>
      <SelectMenuComponent
        isOnAnswer={isOnAnswer}
        isAnswer={isAnswer}
        isOnRequest={isOnRequest}
        isRequest={isRequest}
      />
      <S.MainPageTipContainer>
        <S.MainPageTip>질문에 말로 대답하고 클릭해서 확인해보세요!</S.MainPageTip>
      </S.MainPageTipContainer>
      <S.InvQContainer>
        {invQs.map((inv, i) => {
          return <InvQ key={i} question={inv.question} answer={inv.answer} />;
        })}
      </S.InvQContainer>
    </S.MainPageContainer>
  );
};
