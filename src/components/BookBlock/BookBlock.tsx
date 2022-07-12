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
    <div className={s.item}>
      <div className={s.image}>
        <img src={imageLinks ? imageLinks?.thumbnail : noCoverImage} alt="" />
        <Button
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            borderRadius: '50%',
            background: '#D3D3D3',
            padding: '3px',
          }}>
          <IconFavorite size="24" color="transparent" />
        </Button>
      </div>
      <div className={s.authors}>{authors?.join(' ')}</div>
      <div className={s.title}>{title}</div>
    </div>
  );
};

export default BookBlock;
