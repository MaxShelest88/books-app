import React from 'react';
import { TOption } from '../../../models/UIComponents';
import { useAppDispatch } from '../../../redux/hooks';

type Props = { options: TOption[]; value: string; defaultValue: string };

const Select = ({ options, value, defaultValue }: Props) => {
  const optionValues = options.map((option, index) => (
    <option value={option.value} key={index}>
      {option.name}
    </option>
  ));
  return <select onChange={() => {}}>{optionValues}</select>;
};

export default Select;
