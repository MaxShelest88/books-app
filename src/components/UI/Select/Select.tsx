import React from 'react';
import { setQueryOption } from '../../../redux/filter/slice';
import { useAppDispatch } from '../../../redux/hooks';

type Props = {};

const Select = ({ options, defaultValue, value }: Props) => {
  const dispatch = useAppDispatch();

  const optionValues = options.map((option, index) => (
    <option value={option.value} key={index}>
      {option.name}
    </option>
  ));
  return <select onChange={(e) => dispatch(setQueryOption(e.target.value))}>{optionValues}</select>;
};

export default Select;
