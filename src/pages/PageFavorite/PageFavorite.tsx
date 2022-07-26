import React from 'react';
import { Link } from 'react-router-dom';
import BookItem from '../../components/BookItem/BookItem';
import Button from '../../components/UI/Button/Button';
import { selectFavoriteBooks } from '../../redux/favorite/selectors';
import { TFavoriteBook } from '../../redux/favorite/types';
import { useAppSelector } from '../../redux/hooks';
import s from './PageFavorite.module.scss';

const Favorite: React.FC = () => {
  const items = useAppSelector(selectFavoriteBooks);

  React.useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem('favoriteBooks', json);
  }, [items]);

  return (
    <div className={s.favorite}>
      <div className={`${s.conteiner} container`}>
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
          <h2 className={s.decription}>Пока что избранных книг нет...</h2>
        )}
        <Link to="/" style={{ alignSelf: 'center' }}>
          <Button>Вернуться на главную</Button>
        </Link>
      </div>
    </div>
  );
};

export default Favorite;
