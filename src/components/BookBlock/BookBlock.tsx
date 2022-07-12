import React from 'react';
import { addItem, removeItem } from '../../redux/favoriteBooks/slice';
import { useAppDispatch } from '../../redux/hooks';
import { TVolumeInfo } from '../../redux/searchedBooks/types';
import Button from '../UI/Button/Button';
import IconFavorite from '../UI/Icons/IconFavorite';
import s from './BookBlock.module.scss';

const noCoverImage = 'https://books.google.ru/googlebooks/images/no_cover_thumb.gif';

type BookBlockProps = { volumeInfo: TVolumeInfo; id: string };

const BookBlock: React.FC<BookBlockProps> = ({ volumeInfo, id }) => {
  const dispatch = useAppDispatch();
  const [hovered, setHovered] = React.useState<boolean>(false);
  const [favored, setFavored] = React.useState<boolean>(false);

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
    dispatch(addItem(item));
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
          }}>
          <IconFavorite size="24" color={favored ? '#3b3bf0' : 'transparent'} />
        </Button>
      </div>
      <div className={s.authors}>{authors?.join(' ')}</div>
      <div className={s.title}>{title}</div>
    </div>
  );
};

export default BookBlock;
