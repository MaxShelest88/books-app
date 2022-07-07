import { createSlice } from '@reduxjs/toolkit'
import { fetchBooks } from './asyncactions';
import { ISearchedBooksState, Status, TSearchedBook } from './types';

const initialState: ISearchedBooksState = {
	searchValue: '',
	items: [],
	status: Status.LOADING
}

const searchedBooksSlice = createSlice({
  name: 'searchedBooks',
  initialState,
	reducers: {
		setSearchValue(state, action) {
			state.searchValue = action.payload
		}
	},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
	  builder.addCase(fetchBooks.pending, (state) => {
		  state.status = Status.LOADING
		  state.items = []
	  });
	   builder.addCase(fetchBooks.fulfilled, (state, action) => {
		state.status = Status.SUCCESS
      state.items = action.payload
		})
	   builder.addCase(fetchBooks.rejected, (state) => {
		state.status = Status.ERROR
      state.items = []
    })
  },
});

export const {setSearchValue} = searchedBooksSlice.actions

export default searchedBooksSlice.reducer