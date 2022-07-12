import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../UI/Input/Input';
import s from './Header.module.scss';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Input />
        {pathname !== '/favorite' && <Link to="/favorite">Любимые книги</Link>}
      </div>
    </header>
  );
}
