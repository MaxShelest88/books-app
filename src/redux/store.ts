import { configureStore } from '@reduxjs/toolkit'
import searchedBooksReducer from './searchedBooks/slice'
import favoriteBooksReducer from './favoriteBooks/slice'

export const store = configureStore({
	reducer: {
		searchedBooks: searchedBooksReducer,
		favoriteBooks: favoriteBooksReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch