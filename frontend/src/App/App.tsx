import React from 'react'; // { useState, useEffect }
import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Navbar from '../features/Navbar/Navbar';
import MainPage from '../features/MainPage/MainPage';
import NotFound from '../features/NotFound/NotFound';
import ActorsList from '../features/actors/ActorsList';
import AccountTest from '../features/forms/AccountTest';
import SpectaclesList from '../features/spectacles/SpectaclesList';
import DirectorsList from '../features/directors/DirectorsList';
import Registration from '../features/auth/Registration';

function App(): JSX.Element {
  return (
    <div className="main__container">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
          <Route path="/spectacles" element={<SpectaclesList />} />
          <Route path="/directors" element={<DirectorsList />} />
          <Route path="/actors" element={<ActorsList />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/accounttest" element={<AccountTest />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <a href="#twf">Накупить билетов</a>
    </div>
  );
}
export default App;
