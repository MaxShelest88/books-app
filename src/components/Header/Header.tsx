import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../UI/Input/Input';
import s from './Header.module.scss';
import { useLocation } from 'react-router-dom';
import icon from '../../assets/icons/Books-icon.png';
import { selectQueryOption } from '../../redux/filter/selectors';
import { setQueryOption } from '../../redux/filter/slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import InputRadio from '../UI/InputRadio/InputRadio';
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
          <div className={s.logo}>
            <img className={s.logoimage} src={icon} alt="Logo" /> <span>My Books</span>
          </div>
        </Link>

        {pathname !== '/favorite' && (
          <>
            <form>
              <Input style={{ marginBottom: '10px' }} />
              {optionValues}
            </form>
            <Link to="/favorite" style={{ color: 'black' }}>
              Избранные книги
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
