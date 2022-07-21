import React from 'react';
import { selectBooks } from '../../redux/books/selectors';
import { setMaxResults } from '../../redux/books/slice';
import { TSearchedBook } from '../../redux/books/types';
import { selectSort } from '../../redux/filter/selectors';
import { setPage, setSort } from '../../redux/filter/slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { uniqItems } from '../../utils/uniqItems';
import BookItem from '../BookItem/BookItem';
import BookSkeleton from '../BookItem/BookSkeleton';
import Select from '../UI/Select/Select';
import s from './BookItems.module.scss';

type Props = {};

function BookItems({}: Props) {
  const { items, status } = useAppSelector(selectBooks);
  const uniq = uniqItems(items);
  const books = uniq?.map((item: TSearchedBook) => <BookItem {...item} key={item.id} />);

  const skeleton = [...new Array(12)].map((_, i) => <BookSkeleton key={i} />);
  const dispatch = useAppDispatch();
  const sortValue = useAppSelector(selectSort);
  const { maxResults } = useAppSelector(selectBooks);

  const handleChangeSport = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(e.target.value));
  }, []);

  const handleChangeMaxResults = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
	  dispatch(setMaxResults(e.target.value));
	  dispatch(setPage(0))
  }, []);

  const renderBooks = (status: string) => {
    switch (status) {
      case 'idle':
        return <></>;
      case 'loading':
        return (
          <>
            <div className={s.top}>
              <h1 className={s.title}>Найденные книги</h1>
              <div className={s.sort}>
                <Select
                  value={sortValue}
                  defaultValue="Сортировать по"
                  options={[
                    { name: 'Релевантности', value: 'relevance' },
                    { name: 'Самые новые', value: 'newest' },
                  ]}
                  onChange={handleChangeSport}
                />
                <Select
                  value={String(maxResults)}
                  defaultValue="Книг на странице"
                  options={[
                    { name: '12', value: '12' },
                    { name: '24', value: '24' },
                  ]}
                  onChange={handleChangeMaxResults}
                />
              </div>
            </div>
            <div className={s.items}>{skeleton}</div>
          </>
        );
      case 'success':
        return (
          <>
            <div className={s.top}>
              <h1 className={s.title}>Найденные книги</h1>
              <div className={s.sort}>
                <Select
                  value={sortValue}
                  defaultValue="Сортировать по"
                  options={[
                    { name: 'Релевантности', value: 'relevance' },
                    { name: 'Самые новые', value: 'newest' },
                  ]}
                  onChange={handleChangeSport}
                />
                <Select
                  value={String(maxResults)}
                  defaultValue="Книг на странице"
                  options={[
                    { name: '12', value: '12' },
                    { name: '24', value: '24' },
                  ]}
                  onChange={handleChangeMaxResults}
                />
              </div>
            </div>
            <div className={s.items}>{books}</div>
          </>
        );
      case 'error':
        return <div>Что-то пошло не так</div>;
    }
  };
  return <>{renderBooks(status)}</>;
}

export default BookItems;
