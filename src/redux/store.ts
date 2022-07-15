import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books/slice'
import favoriteReducer from './favorite/slice'
import filterReducer from './filter/slice'

export const store = configureStore({
	reducer: {
		books: booksReducer,
		favorite: favoriteReducer,
		filter: filterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch