import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../UI/Input/Input';
import s from './Header.module.scss';
import { useLocation } from 'react-router-dom';
import { selectQueryOption } from '../../redux/filter/selectors';
import { setQueryOption } from '../../redux/filter/slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import InputRadio from '../UI/InputRadio/InputRadio';
import IconFavorite from '../UI/Icons/IconFavorite';
import Logo from '../Logo/Logo';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';
const options = [
  { name: 'По названию', value: 'intitle' },
  { name: 'По автору', value: 'inauthor' },
];

export default function Header() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const queryOption = useAppSelector(selectQueryOption);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setQueryOption(e.target.value));

  const optionValues = options.map((option, index) => (
    <InputRadio
      option={option}
      queryOption={queryOption}
      onChange={onChange}
      name={'queryOption'}
      style={{ margin: '0 5px' }}
      key={index}
    />
  ));

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to="/">
          <Logo />
        </Link>
        {pathname !== '/favorite' && (
          <>
            <form>
              <Input style={{ marginBottom: '10px' }} />
              {optionValues}
            </form>
            <Link className="" to="/favorite">
              <ButtonFavorite />
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
