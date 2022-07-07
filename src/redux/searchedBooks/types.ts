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
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type TSearchedBook = {
	id: string;
	volumeInfo: TVolumeInfo
}

export type TData = {
	kind: string
	totalItems: number
	items: TSearchedBook[]
}

export interface ISearchedBooksState {
	items: TSearchedBook[]
	status: Status
}