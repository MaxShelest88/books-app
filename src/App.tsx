import React from 'react';
import PageHome from './pages/PageHome/PageHome';
import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import PageFavorite from './pages/PageFavorite/PageFavorite';
import PageBook from './pages/PageBook/PageBook';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="/favorite" element={<PageFavorite />} />
        <Route path="/book/:id" element={<PageBook />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
