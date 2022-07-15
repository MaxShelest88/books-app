import {createSlice} from '@reduxjs/toolkit'
import {fetchBooks} from './asyncactions';
import {ISearchedBooksState, Status} from './types';

const initialState: ISearchedBooksState = {
  items: [],
status: Status.IDLE,
	totalItems: 0,
	currentPage: 0,
	searchValue:''
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
	  setPage(state, action) {
			state.currentPage = action.payload
		},
		setSearchValue(state, action) {
      state.searchValue = action.payload
	  },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = Status.LOADING
		 state.items = []
		 state.totalItems = 0
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
		 state.items = action.payload.items
		 state.totalItems =  action.payload.totalItems
    })
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = Status.ERROR
		 state.items = []
		 state.totalItems = 0
    })
  },
});

export const { setItems, setStatus, setPage, setSearchValue} = booksSlice.actions

export default booksSlice.reducer