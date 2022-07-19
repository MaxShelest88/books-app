import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteBooks } from '../../redux/favorite/selectors';
import { addItem, removeItem } from '../../redux/favorite/slice';
import { TFavoriteBook } from '../../redux/favorite/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { TVolumeInfo } from '../../redux/books/types';
import Button from '../UI/Button/Button';
import IconFavorite from '../UI/Icons/IconFavorite';
import s from './BookItem.module.scss';

const noCoverImage = 'https://books.google.ru/googlebooks/images/no_cover_thumb.gif';

type BookItemProps = { volumeInfo: TVolumeInfo; id: string; favorite?: boolean };

const BookItem: React.FC<BookItemProps> = ({ volumeInfo, id, favorite }) => {
  const dispatch = useAppDispatch();
  const [hovered, setHovered] = React.useState<boolean>(false);
  const [favored, setFavored] = React.useState<boolean>(false);
  const favoriteBooks = useAppSelector(selectFavoriteBooks);
  const favoriteBook = favoriteBooks.find((item: TFavoriteBook) => item.id === id);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const {
    authors,
    averageRating,
    categories,
    imageLinks,
    language,
    pageCount,
    printType,
    publishedDate,
    publisher,
    subtitle,
    title,
    description,
  } = volumeInfo;

  const handleFavoriteClick = () => {
    const item = {
      authors,
      averageRating,
      categories,
      imageLinks,
      language,
      pageCount,
      printType,
      publishedDate,
      publisher,
      subtitle,
      title,
      description,
      id,
    };
    setFavored((prevFavored) => !prevFavored);
    if (!favoriteBook) {
      dispatch(addItem(item));
    }
    if (favoriteBook) {
      dispatch(removeItem(id));
      setFavored(false);
    }
  };

  return (
    <div className={s.item} onMouseOver={handleHover} onMouseLeave={handleLeave}>
      <div className={s.image}>
        <img src={imageLinks ? imageLinks?.thumbnail : noCoverImage} alt="" />
        <Button
          onClick={handleFavoriteClick}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            borderRadius: '50%',
            display: hovered ? 'block' : 'none',
            zIndex: 5,
          }}>
          <IconFavorite
            size="24"
            color={favored || favorite || favoriteBook ? 'yellow' : 'transparent'}
          />
        </Button>
        <div className={s.cover}>
          <p>Издательство: {publisher ? publisher : '-'}</p>
          <p>Год издания: {publishedDate ? publishedDate.slice(0, 4) : '-'}</p>
          <p>Жанры: {categories ? categories : '-'}</p>
          <p>Количество страниц: {pageCount ? pageCount : '-'}</p>
        </div>
      </div>
      <div className={s.authors}>{authors?.join(' ')}</div>
      <div className={s.title}>{title}</div>
    </div>
  );
};

export default BookItem;
