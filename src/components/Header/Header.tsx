import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Input from '../UI/Input/Input';
import s from './Header.module.scss';
import { useLocation } from 'react-router-dom';
import { selectCurrentPage, selectQueryOption, selectSort } from '../../redux/filter/selectors';
import { setPage, setQueryOption } from '../../redux/filter/slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import InputRadio from '../UI/InputRadio/InputRadio';
import Logo from '../Logo/Logo';
import Favorite from '../Favorite/Favorite';
import { setTotalItems } from '../../redux/books/slice';
import Button from '../UI/Button/Button';
import { fetchBooks } from '../../redux/books/asyncactions';
import { selectBooks } from '../../redux/books/selectors';
import { useFetchAndSearchParams } from '../../hooks/useFetch';
const options = [
  { name: 'По названию', value: 'intitle' },
  { name: 'По автору', value: 'inauthor' },
];

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const queryOption = useAppSelector(selectQueryOption);
  const { query, maxResults } = useAppSelector(selectBooks);
  const pageCurrent = useAppSelector(selectCurrentPage);
  const sort = useAppSelector(selectSort);
  const fetchAndSearchParams = useFetchAndSearchParams();
  const [value, setValue] = React.useState<string>('');

  const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQueryOption(e.target.value));
    dispatch(setTotalItems(0));
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (query) {
      fetchAndSearchParams({ query, maxResults, pageCurrent, queryOption, sort });
      dispatch(setPage(0));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (query) {
        fetchAndSearchParams({ query, maxResults, pageCurrent, queryOption, sort });
        dispatch(setPage(0));
      }
    }
  };

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
      <div className={`${s.container} container`}>
        <div className={s.top}>
          <Link to="/">
            <Logo />
          </Link>
          <div className={s.form}>
            {pathname !== '/favorite' && (
              <div className={s.formLine}>
                <Input query={query} onKeyPress={handleKeyDown} />
                <Button onClick={handleClick} style={{ marginLeft: '5px' }}>
                  Поиск
                </Button>
              </div>
            )}
          </div>
          <Link className="" to="/favorite">
            <Favorite />
          </Link>
        </div>
        <div className={s.buttom}>
          <div className={s.options}>{pathname !== '/favorite' && <>{optionValues}</>}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
