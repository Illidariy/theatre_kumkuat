import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ActorsList from '../features/actors/ActorsList';
import Registration from '../features/auth/Registration';
import DirectorsList from '../features/directors/DirectolList';
import PerfomancesList from '../features/perfomances/PerfomancesList';
import Registration from '../features/auth/Registration';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/perfomances" element={<PerfomancesList />} />
        <Route path="/actors" element={<ActorsList />} />
        <Route path="/directors" element={<DirectorsList />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
        <a href="#twf">Накупить билетов</a>
    </div>
  );
}

export default App;
