import React from 'react';
import s from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  [x: string]: any;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={s.button}>
      {children}
    </button>
  );
};

export default Button;
