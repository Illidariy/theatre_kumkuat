import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ActorsList from '../features/actors/ActorsList';
import PerfomancesList from '../features/perfomances/PerfomancesList';
// import Registration from '../features/auth/Registration';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/perfomances" element={<PerfomancesList />} />
        <Route path="/actors" element={<ActorsList />} />
        {/* <Registration /> */}
        {/* <a href="#twf">Накупить билетов</a> */}
      </Routes>
    </div>
  );
}

export default App;