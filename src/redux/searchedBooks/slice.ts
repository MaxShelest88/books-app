import {createSlice} from '@reduxjs/toolkit'
import {fetchBooks} from './asyncactions';
import {ISearchedBooksState, Status} from './types';

const initialState: ISearchedBooksState = {
  searchValue: '',
  items: [],
status: Status.IDLE,
  totalItems: 0
}

const searchedBooksSlice = createSlice({
  name: 'searchedBooks',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload
	  },
	  setItems(state, action) {
		  state.items = action.payload
	  },
	  setStatus(state, action) {
		  state.status = action.payload
	  }
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
		 state.totalItems = action.payload.totalItems
    })
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = Status.ERROR
		 state.items = []
		 state.totalItems = 0
    })
  },
});

export const {setSearchValue, setItems, setStatus} = searchedBooksSlice.actions

export default searchedBooksSlice.reducer