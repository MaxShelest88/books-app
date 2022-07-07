import { configureStore } from '@reduxjs/toolkit'
import searchedBooksReducer from './searchedBooks/slice'

export const store = configureStore({
	reducer: {
	  searchedBooks: searchedBooksReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch