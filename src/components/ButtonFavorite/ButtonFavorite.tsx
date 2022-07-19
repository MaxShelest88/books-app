import React from 'react';
import { selectFavoriteBooks } from '../../redux/favorite/selectors';
import { useAppSelector } from '../../redux/hooks';
import IconFavorite from '../UI/Icons/IconFavorite';
import s from './ButtonFavorite.module.scss';

type Props = {};

const ButtonFavorite = (props: Props) => {
  const favItems = useAppSelector(selectFavoriteBooks);

  return (
    <button className={s.buttonFav}>
      <span style={{ position: 'relative', zIndex: 10 }}>Избранное</span>
      <span style={{ position: 'relative' }}>
        <IconFavorite color="yellow" size="25" />
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: 5,
            color: 'black',
            transform: 'translate(-50%,-50%)',
            fontSize: 14,
            fontWeight: 700,
          }}>
          {favItems.length}
        </span>
      </span>
    </button>
  );
};

export default ButtonFavorite;
