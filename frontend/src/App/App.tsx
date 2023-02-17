import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PerfomancesList from '../features/perfomances/PerfomancesList';
import './App.css';

function App():JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PerfomancesList />} />
      {/* <header className="App-header" /> */}

      </Routes>

    </div>
  );
}

export default App;
