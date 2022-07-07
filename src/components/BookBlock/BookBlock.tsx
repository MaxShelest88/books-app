import React from 'react';
import { TVolumeInfo } from '../../redux/searchedBooks/types';

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
  } = volumeInfo;

  return <div>{title}</div>;
};

export default BookBlock;
