import React from 'react';
import Home from './pages/Home/Home';
import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Favorite from './pages/Favorite/Favorite';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
}

export default App;
