import React from 'react';
import s from './ButtonFavorite.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  [x: string]: any;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={s.buttonFav}>
      {children}
    </button>
  );
};

export default Button;
