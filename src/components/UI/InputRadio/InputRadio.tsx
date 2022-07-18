import React from 'react';
import { TOption } from '../../../models/UIComponents';
import s from './InputRadio.module.scss';

type Props = {
  option: TOption;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  queryOption: string;
	name: string;
  [x: string]: any;
};

const InputRadio: React.FC <Props> = ({ option, onChange, queryOption, name, ...props }) => {
  return (
    <label className={s.radio} htmlFor={option.value} {...props}>
      <input
        className={s.radioInput}
        checked={queryOption === option.value ? true : false}
        onChange={onChange}
        id={option.value}
        type="radio"
        value={option.value}
        name={name}
      />
      {option.name}
    </label>
  );
};

export default InputRadio;
