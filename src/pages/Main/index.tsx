import React, { useCallback, useEffect, useState } from 'react';

import * as S from './styled';
import { SelectMenuComponent } from '@components/Main';
import { useLocation, useNavigate } from 'react-router';
import { AddInvQPage, InvQPage } from '../SelectPage';
import { SelectWhich } from '@components/template';
import { db } from '@/firebase';

import { addDoc, collection, getDocs } from 'firebase/firestore';
import { CreateModal } from '@components/modal';

export interface ItemType {
  question: string;
  answer: string;
  status: boolean;
}

export const MainPage: React.FC = () => {
  const [invQs, setInvQs] = useState<ItemType[]>([
    {
      question: '',
      answer: '',
      status: false,
    },
  ]);
  const [modalState, setModalState] = useState<boolean>(false);

  const navigate = useNavigate();

  const isOnAnswer = () => {
    navigate('/');
  };
  const isOnRequest = () => {
    navigate('/answer');
  };
  const location = useLocation();
  const locationPath = location.pathname.split('/')[1] as 'answer' | '';

  const [invQuestion, setInvQuestion] = useState<string>('');
  const [invAnswer, setInvAnswer] = useState<string>('');
  const invQsCollectionRef = collection(db, 'invqRq');
  const getInvQs = useCallback(async () => {
    console.log(1);
    const data = await getDocs(invQsCollectionRef);
    const invQsData = data.docs.map((doc) => ({
      question: doc.data().question,
      answer: doc.data().answer,
      status: doc.data().status,
    }));
    setInvQs(invQsData);
  }, []);

  useEffect(() => {
    getInvQs();
  }, [getInvQs]);

  const createInv = async () => {
    await addDoc(invQsCollectionRef, { answer: invAnswer, question: invQuestion, status: false });
    setModalState(true);
  };
  const CloseModalHadler = () => {
    return setModalState(false);
  };
  return (
    <S.MainPageContainer>
      {modalState ? <CreateModal CloseHandler={CloseModalHadler} /> : <></>}
      <SelectMenuComponent
        isOnAnswer={isOnAnswer}
        isAnswer={locationPath === ''}
        isRequest={locationPath === 'answer'}
        isOnRequest={isOnRequest}
      />
      <S.MainPageTipContainer>
        {locationPath === '' ? (
          <S.MainPageTip>질문에 말로 대답하고 클릭해서 확인해보세요!</S.MainPageTip>
        ) : (
          <S.MainPageTip>면접질문과 답변을 추가해 보세요.</S.MainPageTip>
        )}
      </S.MainPageTipContainer>

      <SelectWhich
        SelectTypes={locationPath}
        question={<InvQPage invQs={invQs} />}
        answer={
          <AddInvQPage
            setInvAnswer={setInvAnswer}
            setInvQuestion={setInvQuestion}
            createInv={createInv}
            invAnswer={invAnswer}
            invQuestion={invQuestion}
          />
        }
      />
    </S.MainPageContainer>
  );
};
