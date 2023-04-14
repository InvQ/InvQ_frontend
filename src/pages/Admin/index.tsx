import React, { useCallback, useEffect, useId, useState } from 'react';
import * as S from './styled';
import { InvQ } from '@components/Main';
import { collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { ItemType } from '../Main';
import { db } from '@/firebase';

export const AdminPage: React.FC = () => {
  const [invQs, setInvQs] = useState<ItemType[]>([
    {
      question: '',
      answer: '',
      status: false,
    },
  ]);
  const [keyId, setKeyId] = useState([
    {
      keyId: '',
    },
  ]);
  const [adminLogin, setAdminLogin] = useState('');
  const [saveAdmin, setSaveAdmin] = useState('');
  const invQsCollectionRef = collection(db, 'invqRq');
  const getInvQs = useCallback(async () => {
    const data = await getDocs(invQsCollectionRef);
    const invQsData = data.docs.map((doc) => ({
      question: doc.data().question,
      answer: doc.data().answer,
      status: doc.data().status,
    }));
    setInvQs(invQsData);
    const keyIdData = data.docs.map((doc) => ({
      keyId: doc.id,
    }));
    setKeyId(keyIdData);
  }, [invQsCollectionRef]);

  useEffect(() => {
    getInvQs();
  }, [getInvQs]);
  const updateInvQ = useCallback(
    async (i: number, status: boolean) => {
      const invDocRef = doc(db, 'invqRq', keyId[i].keyId);
      const invDoc = await getDoc(invDocRef);
      const invField = { status: !status };
      if (invDoc.exists()) {
        await updateDoc(invDocRef, invField);
      } else {
        console.log(`Document with ID ${i} does not exist.`);
      }
    },
    [db, keyId]
  );

  const deleteInvQ = useCallback(
    async (i: number) => {
      const invDocRef = doc(db, 'invqRq', keyId[i].keyId);
      await deleteDoc(invDocRef);
    },
    [db, keyId]
  );

  const invQArr = invQs.map((inv, i) =>
    inv.status ? (
      <div key={i}></div>
    ) : (
      <div key={i}>
        <InvQ question={inv.question} answer={inv.answer} />
        <S.AdminButtonContainer>
          <S.CancelButton
            onClick={() => {
              deleteInvQ(i);
            }}
          >
            <S.CancelText>삭제</S.CancelText>
          </S.CancelButton>
          <S.AgreeButton
            onClick={() => {
              updateInvQ(i, inv.status);
            }}
          >
            <S.AgreeText>수락</S.AgreeText>
          </S.AgreeButton>
        </S.AdminButtonContainer>
      </div>
    )
  );
  return (
    <>
      {saveAdmin === import.meta.env.VITE_ADMIN_KEY ? (
        <S.AdminContainer>
          <S.AdminPageTipContainer>
            <S.AdminPageTip>요청에 대해 수락 또는 거절해 보세요.</S.AdminPageTip>
          </S.AdminPageTipContainer>
          <S.InvRContainer>{invQArr}</S.InvRContainer>
        </S.AdminContainer>
      ) : (
        <>
          <strong>인증해주세요</strong>
          <input
            style={{ fontSize: '16px' }}
            type="password"
            onChange={(event) => setAdminLogin(event.target.value)}
          />
          <button onClick={() => setSaveAdmin(adminLogin)}>인증</button>
        </>
      )}
    </>
  );
};
