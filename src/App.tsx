import React, { lazy, Suspense } from 'react';
import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import PageHome from './pages/PageHome/PageHome';
import Loading from './components/UI/Loading/Loading';

const PageFavorite = lazy(
  () => import(/*webpackChunkName: "PageFavorite"*/ './pages/PageFavorite/PageFavorite'),
);
const PageBook = lazy(() => import(/*webpackChunkName: "PageBook"*/ './pages/PageBook/PageBook'));
const PageNotFound = lazy(
  () => import(/*webpackChunkName: "PageNotFound"*/ './pages/PageNotFound/PageNotFound'),
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<PageHome />} />
          <Route path="/favorite" element={<PageFavorite />} />
          <Route path="/book/:id" element={<PageBook />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
