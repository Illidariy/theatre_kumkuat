import React from 'react'; // { useState, useEffect }
import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Navbar from '../features/Navbar/Navbar';
import MainPage from '../features/MainPage/MainPage';
import NotFound from '../features/NotFound/NotFound';
import AccountTest from '../features/forms/AccountTest';
import SpectaclesList from '../features/spectacles/SpectaclesList';
import CrewList from '../features/crew/crewList';
import DirectorsList from '../features/directors/DirectorsList';
import DirectorCard from '../features/directors/DirectorCard';
import ActorsList from '../features/actors/ActorsList';
import ActorCard from '../features/actors/ActorCard';
import Registration from '../features/auth/Registration';

function App(): JSX.Element {
  return (
    <div className="main__container">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
          <Route path="/spectacles" element={<SpectaclesList />} />
          <Route path="/crew" element={<CrewList />} />
          <Route path="/directors" element={<DirectorsList />} />
          <Route path="/directors/:directorId" element={<DirectorCard />} />
          <Route path="/actors" element={<ActorsList />} />
          <Route path="/actors/:actorId" element={<ActorCard />} />
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
