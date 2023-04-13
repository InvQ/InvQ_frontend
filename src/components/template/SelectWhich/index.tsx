import React from 'react';

interface SelectWhichProps {
  SelectTypes: 'answer' | '';
  question: React.ReactNode;
  answer: React.ReactNode;
}

export const SelectWhich: React.FC<SelectWhichProps> = ({ SelectTypes, question, answer }) => {
  return (
    <>
      {SelectTypes === '' ? question : <></>}
      {SelectTypes === 'answer' ? answer : <></>}
    </>
  );
};
