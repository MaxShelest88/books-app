import React from 'react';
import { TOption } from '../../../models/UIComponents';
import { useAppDispatch } from '../../../redux/hooks';

type Props = { options: TOption []};

const Select = ({ options }: Props) => {
  const optionValues = options.map((option, index) => (
    <option value={option.value} key={index}>
      {option.name}
    </option>
  ));
  return <select onChange={() => {}}>{optionValues}</select>;
};

export default Select;
