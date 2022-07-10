import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { TData } from './types';

export const fetchBooks = createAsyncThunk(
  'searchedBooks/fetchBooks',
  async (searchValue: string) => {
    const {data} = await axios.get<TData>(
		 `https://www.googleapis.com/books/v1/volumes`, {
			 params: {
				 q: searchValue,
				 key: process.env.REACT_APP_API_KEY
		 }}
	  );
   	return data.items
  }
)