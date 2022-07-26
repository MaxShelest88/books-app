import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import s from './PageNotFound.module.scss';

const PageNotFound: FC = () => {
  return (
    <div className="container">
      <div className={s.body}>
        <h1 className={s.title}>Ошибка 404</h1>
        <p className={s.description}>
          Что-то пошло не так :( Страница, которую вы запрашиваете, не существует
        </p>
        <Link to="/" style={{ alignSelf: 'center' }}>
          <Button>Вернуться на главную</Button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
