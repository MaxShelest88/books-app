import { createSlice } from '@reduxjs/toolkit'
import { FilterState } from './types';


const initialState:FilterState = {
	sort:''
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
	reducers: {
		
  },
});

export const {} = filterSlice.actions

export default filterSlice.reducer