import { TImageLinks } from "../books/types";

export type TFavoriteBook = {
  authors: string[];
  categories: string[];
  imageLinks: TImageLinks;
  language: string;
  pageCount: number;
  publishedDate: string;
  publisher: string;

	title: string;
	previewLink: string;
	description: string;
	id: string;
	favorite: boolean;
}

export interface IFavoriteBooksState {
	items: TFavoriteBook[];
}