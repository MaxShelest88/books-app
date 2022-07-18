import {createSlice} from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';
import {fetchBooks} from './asyncactions';
import {ISearchedBooksState, Status} from './types';

const initialState: ISearchedBooksState = {
  items: [],
status: Status.IDLE,
	query: '',
	totalItems: 0
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
	  setItems(state, action) {
		  state.items = action.payload
	  },
	  setStatus(state, action) {
		  state.status = action.payload
	  },
		setSearchValue(state, action) {
      state.query = action.payload
	  },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = Status.LOADING
		 state.items = []
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
		 state.items = action.payload.items
		 state.totalItems = action.payload.totalItems
    })
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = Status.ERROR
		 state.items = []
    })
  },
});

export const { setItems, setStatus, setSearchValue} = booksSlice.actions

export default booksSlice.reducer