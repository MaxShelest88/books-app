import {createSlice} from '@reduxjs/toolkit'
import {fetchBooks} from './asyncactions';
import {ISearchedBooksState, Status} from './types';

const initialState: ISearchedBooksState = {
  	items: [],
	status: Status.IDLE,
	query: '',
	totalItems: 0,
	maxResults: 12,
	pageCount: 0
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
	  setMaxResults(state, action) {
		  state.maxResults = action.payload
	  },
	  setTotalItems(state, action) {
		  state.totalItems = action.payload
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
		 state.totalItems = state.totalItems === 0 ? action.payload.totalItems : state.totalItems
		 state.pageCount = Math.ceil(state.totalItems / state.maxResults)
    })
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = Status.ERROR
		 state.items = []
		 state.totalItems = 0
    })
  },
});

export const { setItems, setStatus, setSearchValue, setMaxResults, setTotalItems} = booksSlice.actions

export default booksSlice.reducer