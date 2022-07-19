import React from 'react';
import { selectBooks } from '../../redux/books/selectors';
import { TSearchedBook } from '../../redux/books/types';
import { selectSort } from '../../redux/filter/selectors';
import { setSort } from '../../redux/filter/slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import BookItem from '../BookItem/BookItem';
import BookSkeleton from '../BookItem/BookSkeleton';
import Select from '../UI/Select/Select';
import s from './BookItems.module.scss';

type Props = {};

function BookItems({}: Props) {
  const { items, status } = useAppSelector(selectBooks);
  const books = items?.map((item: TSearchedBook) => <BookItem {...item} key={item.id} />);
  const skeleton = [...new Array(12)].map((_, i) => <BookSkeleton key={i} />);
  const dispatch = useAppDispatch();
  const sortValue = useAppSelector(selectSort);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    dispatch(setSort(e.target.value));
  };

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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={s.items}>{books ? books : <div>Книги не найдены</div>}</div>
          </>
        );
      case 'error':
        return <div>Что-то пошло не так</div>;
    }
  };
  return <>{renderBooks(status)}</>;
}

export default BookItems;
