import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ActorsList from '../features/actors/ActorsList';
import PerfomancesList from '../features/perfomances/PerfomancesList';
import './App.css';

function App():JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/perfomances" element={<PerfomancesList />} />
      {/* <header className="App-header" /> */}
      <Route path="/actors" element={<ActorsList />} />

      </Routes>

    </div>
  );
}

export default App;
