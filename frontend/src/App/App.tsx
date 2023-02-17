import React from 'react'; // { useState, useEffect }
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import ActorsList from '../features/actors/ActorsList';
import PerfomancesList from '../features/perfomances/PerfomancesList';
// import Registration from '../features/auth/Registration';

import Navbar from '../features/Navbar/Navbar';
import MainPage from '../features/MainPage/MainPage';
import NotFound from '../features/NotFound/NotFound';

function App(): JSX.Element {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
          <Route path="/perfomances" element={<PerfomancesList />} />
          <Route path="/actors" element={<ActorsList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* <Registration /> */}
        {/* <a href="#twf">Накупить билетов</a> */}
      </Routes>
    </div>
  );
}
export default App;
