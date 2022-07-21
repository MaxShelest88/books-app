import React, { FC } from 'react';
import s from './Button.module.scss';

type TButton = {
  children: React.ReactNode;
  [x: string]: any;
};

const Button: FC<TButton> = ({ children, ...props }) => {
  return (
    <button {...props} className={s.button}>
      {children}
    </button>
  );
};

export default Button;
