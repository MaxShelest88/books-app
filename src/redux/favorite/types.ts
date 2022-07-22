import { TImageLinks } from "../books/types";

export type TFavoriteBook = {
  authors: string[];
  categories: string[];
  imageLinks: TImageLinks;
  language: string;
  pageCount: number;
  printType: string;
  publishedDate: string;
  publisher: string;
  subtitle: string;
	title: string;
	previewLink: string;
	description: string;
	id: string;
	favorite: boolean;
}

export interface IFavoriteBooksState {
	items: TFavoriteBook[];
}