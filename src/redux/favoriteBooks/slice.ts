import { createSlice } from '@reduxjs/toolkit'
import { getFavoriteFormLS } from '../../utils/getFavoriteFromLS';
import { IFavoriteBooksState } from './types';

const items  = getFavoriteFormLS();

const initialState:IFavoriteBooksState = {
	items,
}

const favoriteBooksSlice = createSlice({
  name: "favoriteBooks",
  initialState,
	reducers: {
		addItem(state, action) {
			state.items = [...state.items, { ...action.payload, favorite: true }]
			
		},
		removeItem(state, action) {
			state.items = state.items.filter(item => item.id !== action.payload)
			console.log(state.items);
		}
  }
});

export const {addItem,removeItem} = favoriteBooksSlice.actions

export default favoriteBooksSlice.reducer