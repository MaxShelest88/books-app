import React from 'react';
import { selectFavoriteBooks } from '../../redux/favorite/selectors';
import { addItem, removeItem } from '../../redux/favorite/slice';
import { TFavoriteBook } from '../../redux/favorite/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { TVolumeInfo } from '../../redux/books/types';
import ButtonFavorite from '../UI/ButtonFavorite/ButtonFavorite';
import IconFavorite from '../UI/Icons/IconFavorite';
import s from './BookItem.module.scss';
import { Link } from 'react-router-dom';

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
        <ButtonFavorite
          onClick={handleFavoriteClick}
          style={{
            display: hovered ? 'block' : 'none',
            zIndex: 5,
          }}>
          <IconFavorite
            size="24"
            color={favored || favorite || favoriteBook ? 'yellow' : 'transparent'}
          />
        </ButtonFavorite>
        <Link to={`/book/${id}`}>
          <div className={s.cover}>
            <p>Издательство: {publisher ? publisher : '-'}</p>
            <p>Год издания: {publishedDate ? publishedDate.slice(0, 4) : '-'}</p>
            <p>Жанры: {categories ? categories.join(',') : '-'}</p>
            <p>Количество страниц: {pageCount ? pageCount : '-'}</p>
          </div>
        </Link>
      </div>
      <div className={s.authors}>{authors?.join(' ')}</div>
      <div className={s.title}>{title}</div>
    </div>
  );
};

export default BookItem;
