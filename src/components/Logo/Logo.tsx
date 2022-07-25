import React from 'react';
import s from './Logo.module.scss';
import icon from '../../assets/icons/Books-icon.png';

const Logo: React.FC = React.memo(() => {
  return (
    <div className={s.logo}>
      <img className={s.logoimage} src={icon} alt="Logo" /> <span>My Books</span>
    </div>
  );
});

export default Logo;
