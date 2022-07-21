import React from 'react';
import Home from './pages/PageHome/PageHome';
import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Favorite from './pages/PageFavorite/PageFavorite';

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
