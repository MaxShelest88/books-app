import React, { FC } from 'react';
import s from './NotFound.module.scss';

const NotFound: FC = () => {
  return (
    <div className='container'>
    	<div className={s.body}>
	      <h1 className={s.title}>Такой страницы нет</h1>
	      <p className={s.description}>Повторите поиск</p>
	    </div>
    </div>
  );
};

export default NotFound;
