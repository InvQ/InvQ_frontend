import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from '@/pages';
import styled from '@emotion/styled';
import { Navbar } from './components';

export const App: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const ToggleOnClick = () => {
    setToggle(!toggle);
  };
  return (
    <MainScreen>
      <MainSection>
        <Navbar toggleOnClick={ToggleOnClick} toggleState={toggle} />
        <Routes>
          <Route index element={<MainPage />} />
        </Routes>
      </MainSection>
    </MainScreen>
  );
};

const MainScreen = styled.main`
  width: 425px;
  height: 100vh;

  display: flex;
  margin: auto;
  background-color: #f2f2f2;
`;

const MainSection = styled.section`
  position: relative;
  width: 90%;
  height: 100%;

  margin: auto;
`;
