import React from 'react';

type TImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};

type TVolumeInfo = {
  authors: string[];
  averageRating: number;
  categories: string[];
  imageLinks: TImageLinks;
  language: string;
  pageCount: number;
  printType: string;
  publishedDate: string;
  publisher: string;
  subtitle: string;
  title: string;
};

type Props = { id: string; volumeInfo: TVolumeInfo };

function Book({ id, volumeInfo }: Props) {
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
	
	console.log(id);
	
  return <div>{title}</div>;
}

export default Book;
