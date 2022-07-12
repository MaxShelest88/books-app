import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import s from './Header.module.scss'

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Input />
        <Link to="/favorite">Любимые книги</Link>
      </div>
    </header>
  );
}
