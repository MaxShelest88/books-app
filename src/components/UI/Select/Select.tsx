import React from 'react';
import { TOption } from '../InputRadio/InputRadio';

type TSelect = {
  options: TOption[];
  value: string;
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<TSelect> = ({ options, value, defaultValue, onChange }) => {
  const optionValues = options.map((option, index) => (
    <option value={option.value} key={index}>
      {option.name}
    </option>
  ));

  return (
    <select value={value} onChange={onChange}>
      <option disabled value="">
        {defaultValue}
      </option>
      {optionValues}
    </select>
  );
};

export default Select;
