import React from 'react';
import s from './PageLoading.module.scss';

function PageLoading() {
  return (
    <div className={s.root}>
      <div className={s.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default PageLoading;
