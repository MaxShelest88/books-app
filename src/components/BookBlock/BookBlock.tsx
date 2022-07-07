import React from 'react';
import { TVolumeInfo } from '../../redux/searchedBooks/types';

type BookProps = { id: string; volumeInfo: TVolumeInfo };

function Book({ id, volumeInfo }: BookProps) {
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
}

export default Book;
