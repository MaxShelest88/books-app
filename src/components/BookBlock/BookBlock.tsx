import React from 'react';
import { TVolumeInfo } from '../../redux/searchedBooks/types';
import Button from '../UI/Button/Button';
import s from './BookBlock.module.scss';

const noCoverImage = 'https://books.google.ru/googlebooks/images/no_cover_thumb.gif';

type BookBlockProps = { volumeInfo: TVolumeInfo };

const BookBlock: React.FC<BookBlockProps> = ({ volumeInfo }) => {
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
		  </div>
		  <div className={s.authors}>{authors?.join(" ")}</div>
      <div className={s.title}>{title}</div>
      {/* <div className={s.subtitle}>{subtitle}</div> */}
      {/* <Button style={{ justifySelf: 'center' }}>В избранное</Button> */}
    </div>
  );
};

export default BookBlock;
