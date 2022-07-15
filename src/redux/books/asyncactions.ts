import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { FetchBooksArgs, TData } from './types';

export const fetchBooks = createAsyncThunk<TData, FetchBooksArgs>(
  'searchedBooks/fetchBooks',
	async (params) => {
		const { searchValue, currentPage, limit } = params;
    const {data} = await axios.get<TData>(
		 `https://www.googleapis.com/books/v1/volumes`, {
			 params: {
				 q: searchValue,
				 key: process.env.REACT_APP_API_KEY,
				 startIndex: currentPage * limit,
				 maxResults:limit
		 }}
	  );
   	return data
  }
)