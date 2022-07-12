import { createSlice } from '@reduxjs/toolkit'
import { IFavoriteBooksState } from './types';

const initialState:IFavoriteBooksState = {
	items: []
}

const favoriteBooksSlice = createSlice({
  name: "favoriteBooks",
  initialState,
	reducers: {
		addItem(state, action) {
			state.items = [...state.items, action.payload]
		},
		removeItem(state, action) {
			state.items.filter(item => item.id !== action.payload)
		}
  }
});

export const {addItem,removeItem} = favoriteBooksSlice.actions

export default favoriteBooksSlice.reducer