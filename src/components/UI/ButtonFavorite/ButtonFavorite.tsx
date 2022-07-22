import React from 'react';
import s from './ButtonFavorite.module.scss';

type ButtonFavoriteProps = {
  children: React.ReactNode;
  [x: string]: any;
};

const ButtonFavorite: React.FC<ButtonFavoriteProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={s.buttonFav}>
      {children}
    </button>
  );
};

export default ButtonFavorite;
