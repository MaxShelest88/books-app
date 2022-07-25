import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { TData, TFetchBooksArgs } from './types';

export const fetchBooks = createAsyncThunk<TData, TFetchBooksArgs>(
  'searchedBooks/fetchBooks',
	async (params) => {
		const { query, pageCurrent, maxResults, queryOption, sort } = params;
    const {data} = await axios.get<TData>(
		 `https://www.googleapis.com/books/v1/volumes`, {
			 params: {
				 q: `${queryOption}:${query}`,
				 key: process.env.REACT_APP_API_KEY,
				 startIndex:  pageCurrent && maxResults && pageCurrent * maxResults,
				 maxResults: maxResults,
				 printType: 'books',
				 orderBy: sort
		 }}
		);
		
		return data
  }
)