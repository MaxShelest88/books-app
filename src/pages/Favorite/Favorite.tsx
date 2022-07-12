import React from 'react';
import BookBlock from '../../components/BookBlock/BookBlock';
import { selectFavoriteBooks } from '../../redux/favoriteBooks/selectors';
import { useAppSelector } from '../../redux/hooks';

type Props = {};

function Favorite({}: Props) {
  const books = useAppSelector(selectFavoriteBooks);
  return (
    <div>
      {books && books.map((item) => <BookBlock volumeInfo={item} key={item.id} id={item.id} />)}
    </div>
  );
}

export default Favorite;
