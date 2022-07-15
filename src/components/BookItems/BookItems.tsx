import React from 'react';
import { selectBooks } from '../../redux/books/selectors';
import { TSearchedBook } from '../../redux/books/types';
import { useAppSelector } from '../../redux/hooks';
import BookItem from '../BookItem/BookItem';
import PageLoading from '../UI/Loading/Loading';
import s from './BookItems.module.scss';

type Props = {};

function BookItems({}: Props) {
  const { items, status } = useAppSelector(selectBooks);
  const books = items.map((item: TSearchedBook) => <BookItem {...item} key={item.id} />);

  const renderBooks = (status: string) => {
    switch (status) {
      case 'idle':
        return <div></div>;
      case 'loading':
        return <PageLoading />;
      case 'success':
        return (
          <>
            <div className={s.title}>Найденные книги</div>
            <div className={s.items}>{books.length > 0 ? books : <div>Книги не найдены</div>}</div>
          </>
        );
      case 'error':
        return <div>Что-то пошло не так</div>;
    }
  };
  return <div>{renderBooks(status)}</div>;
}

export default BookItems;
