import React from 'react'; // { useState, useEffect }
import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Navbar from '../features/Navbar/Navbar';
import MainPage from '../features/MainPage/MainPage';
import NotFound from '../features/NotFound/NotFound';
import ActorsList from '../features/actors/ActorsList';
import AccountTest from '../features/forms/AccountTest';
// import DirectorsList from '../features/directors/DirectolList';
import Registration from '../features/auth/Registration';
import SpectaclesPageList from '../features/SpectaclesPage/SpectaclesPageList';
import SpectacleInfo from '../features/SpectaclesPage/SpectacleInfo';

function App(): JSX.Element {
  return (
    <div className="main__container">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
          {/* <Route path="/directors" element={<SpectaclesPageList />} /> */}
          <Route path="/spectacles" element={<SpectaclesPageList />} />
          <Route path="/spectacles/:id" element={<SpectacleInfo />} />


          <Route path="/actors" element={<ActorsList />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/accounttest" element={<AccountTest />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
