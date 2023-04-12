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
  @media screen and (min-width: 425px) {
    width: 425px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
  @media screen and (max-width: 376px) {
    width: 375px;
  }
  @media screen and (max-width: 320px) {
    width: 320px;
  }
  height: 100vh;
  user-select: none;
  display: flex;
  margin: auto;
  background-color: #f2f2f2;
`;

const MainSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  margin: auto;
`;
