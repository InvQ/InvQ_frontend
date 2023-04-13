import React, { useEffect, useId, useState } from 'react';
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
  const invQsCollectionRef = collection(db, 'request');
  useEffect(() => {
    const getInvQs = async () => {
      const data = await getDocs(invQsCollectionRef);
      setKeyId(
        data.docs.map((doc) => ({
          keyId: doc.id,
        }))
      );
      setInvQs(
        data.docs.map((doc) => ({
          question: doc.data().question,
          answer: doc.data().answer,
          status: doc.data().status,
        }))
      );
    };
    getInvQs();
  }, [invQsCollectionRef]);
  const updateInvQ = async (i: number, status: boolean) => {
    const invDocRef = doc(db, 'request', keyId[i].keyId);
    const invDoc = await getDoc(invDocRef);
    const invField = { status: !status };
    if (invDoc.exists()) {
      await updateDoc(invDocRef, invField);
    } else {
      console.log(`Document with ID ${i} does not exist.`);
    }
  };
  const deleteInvQ = async (i: number) => {
    const invDocRef = doc(db, 'request', keyId[i].keyId);
    await deleteDoc(invDocRef);
  };

  const invQArr = invQs.map((inv, i) =>
    inv.status ? (
      <strong key={i}>등록 요청이 없습니다.</strong>
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
