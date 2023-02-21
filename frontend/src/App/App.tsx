import React, { useEffect } from 'react'; // { useState, useEffect }
import './App.scss';
import { Route, Routes } from 'react-router-dom';

import { useAppDispatch } from '../store';
import Navbar from '../features/Navbar/Navbar';
import MainPage from '../features/MainPage/MainPage';
import NotFound from '../features/NotFound/NotFound';
import AccountTest from '../features/forms/AccountTest';
// import SpectaclesList from '../features/Spectacles/SpectaclesList';
import CrewList from '../features/Crew/CrewList';
import DirectorsList from '../features/Directors/DirectorsList';
import DirectorCard from '../features/Directors/DirectorCard';
import ActorsList from '../features/Actors/ActorsList';
import ActorCard from '../features/Actors/ActorCard';
import Registration from '../features/auth/Registration';
import Logout from '../features/auth/Logout';
import { checkUser } from '../features/auth/authSlice';
import Authorization from '../features/auth/Authorization';
import ProductList from '../features/products/ProductList';
import SpectacleInfo from '../features/SpectaclesPage/SpectacleInfo';
import SpectaclesPageList from '../features/SpectaclesPage/SpectaclesPageList';
import ContactsPage from '../features/Contacts/ContactsPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <div className="main__container">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
          <Route path="/spectacles" element={<SpectaclesPageList />} />
          <Route path="/spectacles/:id" element={<SpectacleInfo />} />
          <Route path="/products" element={<ProductList />} />

          {/* <Route path="/spectacles" element={<SpectaclesList />} /> */}
          <Route path="/crew" element={<CrewList />} />
          <Route path="/crew/directors" element={<DirectorsList />} />
          <Route path="/crew/directors/:id" element={<DirectorCard />} />
          <Route path="/crew/actors" element={<ActorsList />} />
          <Route path="/crew/actors/:id" element={<ActorCard />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/accounttest" element={<AccountTest />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
