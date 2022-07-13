import React from 'react';
import { useSelector } from 'react-redux';
import BookBlock from '../../components/BookBlock/BookBlock';
import { selectFavoriteBooks } from '../../redux/favoriteBooks/selectors';
import { TFavoriteBook } from '../../redux/favoriteBooks/types';
import { useAppSelector } from '../../redux/hooks';
import s from './Favorite.module.scss';

function Favorite() {
  const items = useSelector(selectFavoriteBooks);

  React.useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem('favoriteBooks', json);
  }, [items]);

  return (
    <section className="books">
      <div className="books__container container">
        <div className={s.title}>Избранные книги</div>
        <div className={s.items}>
          {items ? (
            items.map((item: TFavoriteBook) => (
              <BookBlock volumeInfo={item} favorite={item.favorite} key={item.id} id={item.id} />
            ))
          ) : (
            <div>Книг нет</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Favorite;
