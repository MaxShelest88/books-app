import React from 'react';
import { TOption } from '../../../models/UIComponents';
import { useAppDispatch } from '../../../redux/hooks';

type Props = {
  options: TOption[];
  value: string;
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ options, value, defaultValue, onChange }: Props) => {
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
