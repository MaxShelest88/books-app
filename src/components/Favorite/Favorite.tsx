import React, { FC } from 'react';
import { selectFavoriteBooks } from '../../redux/favorite/selectors';
import { useAppSelector } from '../../redux/hooks';
import IconFavorite from '../UI/Icons/IconFavorite';
import s from './Favorite.module.scss';

const Favorite: FC = () => {
  const favItems = useAppSelector(selectFavoriteBooks);

  return (
    <div className={s.buttonFav}>
      <span style={{ position: 'relative', zIndex: 10 }}>Избранное</span>
      <span style={{ position: 'relative' }}>
        <IconFavorite color="yellow" size="25" />
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: 5,
            color: '#52b5d6',
            transform: 'translate(-50%,-50%)',
            fontSize: 14,
            fontWeight: 700,
          }}>
          {favItems.length}
        </span>
      </span>
    </div>
  );
};

export default Favorite;
