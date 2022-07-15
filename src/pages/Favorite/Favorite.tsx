import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from '../../components/BookItem/BookItem';
import { selectFavoriteBooks } from '../../redux/favorite/selectors';
import { TFavoriteBook } from '../../redux/favorite/types';
import { useAppSelector } from '../../redux/hooks';
import s from './Favorite.module.scss';

function Favorite() {
  const items = useAppSelector(selectFavoriteBooks);

  React.useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem('favoriteBooks', json);
  }, [items]);

  return (
    <section className="books">
      <div className="books__container container">
        {items.length > 0 ? (
          <>
            <div className={s.title}>Избранные книги</div>
            <div className={s.items}>
              {items.map((item: TFavoriteBook) => (
                <BookItem volumeInfo={item} favorite={item.favorite} key={item.id} id={item.id} />
              ))}
            </div>
          </>
        ) : (
          <div>Пока что избранных книг нет...</div>
        )}
      </div>
    </section>
  );
}

export default Favorite;
