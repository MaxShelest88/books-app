export type TImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};

export type TVolumeInfo = {
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
	previewLink: string;
	description: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
  IDLE = 'idle',

}

export type TSearchedBook = {
	id: string;
	volumeInfo: TVolumeInfo
}

export type TData = {
	kind: string;
	totalItems: number;
	items: TSearchedBook[];
}

export interface ISearchedBooksState {
	searchValue: string;
	items: TSearchedBook[];
	status: Status;
	totalItems: number
}