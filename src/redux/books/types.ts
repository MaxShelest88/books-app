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

export type data = {
	items: TSearchedBook[]
}

export type TData = {
	items: TSearchedBook[];
	totalItems: number
}

export interface ISearchedBooksState {
	items: TSearchedBook[];
	status: Status;
	query: string;
	totalItems: number;
	maxResults: number;
	pageCount: number;
}

export type TFetchBooksArgs = {
	searchValue: string;
	pageCurrent: number;
	maxResults: number;
	queryOption: string;
	sort: string;
}