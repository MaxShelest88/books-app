import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: []
}

const favoriteBooksSlice = createSlice({
  name: "favoriteBooks",
  initialState,
  reducers: {}
});

export const {} = favoriteBooksSlice.actions

export default favoriteBooksSlice.reducer