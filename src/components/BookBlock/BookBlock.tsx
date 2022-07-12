import React from 'react';
import { TVolumeInfo } from '../../redux/searchedBooks/types';
import Button from '../UI/Button/Button';
import IconFavorite from '../UI/Icons/IconFavorite';
import s from './BookBlock.module.scss';

const noCoverImage = 'https://books.google.ru/googlebooks/images/no_cover_thumb.gif';

type BookBlockProps = { volumeInfo: TVolumeInfo };

const BookBlock: React.FC<BookBlockProps> = ({ volumeInfo }) => {
  const [hovered, setHovered] = React.useState(false);

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

  return (
    <div className={s.item} onMouseOver={handleHover} onMouseLeave={handleLeave}>
      <div className={s.image}>
        <img src={imageLinks ? imageLinks?.thumbnail : noCoverImage} alt="" />
        <Button
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            borderRadius: '50%',
            display: hovered ? 'block' : 'none',
          }}>
          <IconFavorite size="50" color="transparent" />
        </Button>
      </div>
      <div className={s.authors}>{authors?.join(' ')}</div>
      <div className={s.title}>{title}</div>
    </div>
  );
};

export default BookBlock;
