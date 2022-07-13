import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../UI/Input/Input';
import s from './Header.module.scss';
import { useLocation } from 'react-router-dom';
import icon from '../../assets/icons/books-icon.png';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to="/">
          <div className={s.logo}>
            <img className={s.logoimage} src={icon} alt="Logo" /> <span>My Books</span>
          </div>
        </Link>

        {pathname !== '/favorite' && (
          <>
            <Input />
            <Link to="/favorite" style={{ color: 'black' }}>
              Избранные книги
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
