import React from 'react'; // { useState, useEffect }
import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Navbar from '../features/Navbar/Navbar';
import MainPage from '../features/MainPage/MainPage';
import NotFound from '../features/NotFound/NotFound';
import ActorsList from '../features/actors/ActorsList';
import Registration from '../features/auth/Registration';
import DirectorsList from '../features/directors/DirectolList';
import PerfomancesList from '../features/perfomances/PerfomancesList';

function App(): JSX.Element {
  return (
    <>
      <div className="main__container">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<MainPage />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/perfomances" element={<PerfomancesList />} />
            <Route path="/directors" element={<DirectorsList />} />
            <Route path="/actors" element={<ActorsList />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <a href="#twf">Накупить билетов</a>
    </>
  );
}
export default App;
