import React from 'react';
import Home from './pages/Home/Home';
import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path='' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
