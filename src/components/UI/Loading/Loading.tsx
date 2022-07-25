import React from 'react';
import s from './Loading.module.scss';

const Loading: React.FC = () => {
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

export default Loading;
