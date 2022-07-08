import React from 'react';
import Input from '../Input/Input';
import s from './Header.module.scss'

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Input />
      </div>
    </header>
  );
}
