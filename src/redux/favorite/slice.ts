import { createSlice } from '@reduxjs/toolkit'
import { getFavoriteFormLS } from '../../utils/getFavoriteFromLS';
import { IFavoriteBooksState } from './types';

const items  = getFavoriteFormLS();

const initialState:IFavoriteBooksState = {
	items,
}

const favoriteSlice = createSlice({
  name: "favoriteBooks",
  initialState,
	reducers: {
		addItem(state, action) {
			state.items = [...state.items, { ...action.payload, favorite: true }]
		},
		removeItem(state, action) {
			state.items = state.items.filter(item => item.id !== action.payload)
		}
  }
});

export const {addItem,removeItem} = favoriteSlice.actions

export default favoriteSlice.reducer