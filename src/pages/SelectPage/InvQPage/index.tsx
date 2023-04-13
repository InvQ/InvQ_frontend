import React from 'react';
import * as S from './styled';
import { InvQ } from '@components/Main';

interface InvQDatas {
  question: string;
  answer: string;
  status: boolean;
}

interface InvQPageProps {
  invQs: InvQDatas[];
}

export const InvQPage: React.FC<InvQPageProps> = ({ invQs }) => {
  return (
    <S.InvQContainer>
      {invQs.map((inv, i) => {
        return inv.status ? <InvQ key={i} question={inv.question} answer={inv.answer} /> : <></>;
      })}
    </S.InvQContainer>
  );
};
