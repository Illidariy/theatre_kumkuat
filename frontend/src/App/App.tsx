import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ActorsList from '../features/actors/ActorsList';
import Registration from '../features/auth/Registration';
import AccountTest from '../features/forms/AccountTest';
import SpectaclesList from '../features/spectacles/SpectaclesList';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/spectacles" element={<SpectaclesList />} />
        <Route path="/actors" element={<ActorsList />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/accounttest" element={<AccountTest />} />
      </Routes>
      <a href="#twf">Накупить билетов</a>
    </div>
  );
}

export default App;
