import React from 'react';
import BookBlock from '../../components/BookBlock/BookBlock';
import { selectFavoriteBooks } from '../../redux/favoriteBooks/selectors';
import { useAppSelector } from '../../redux/hooks';
import s from './Favorite.module.scss';

type Props = {};

function Favorite({}: Props) {
  const books = useAppSelector(selectFavoriteBooks);
  return (
    <section className="books">
      <div className="books__container container">
        <div className={s.title}>Избранные книги</div>
        <div className={s.items}>
          {books && books.map((item) => <BookBlock volumeInfo={item} key={item.id} id={item.id} />)}
        </div>
      </div>
    </section>
  );
}

export default Favorite;
