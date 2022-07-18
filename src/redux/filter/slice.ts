import { createSlice } from '@reduxjs/toolkit'
import { IFilterState } from './types';


const initialState:IFilterState = {
	currentPage: 0,
	
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
	reducers: {
		setPage(state, action) {
			state.currentPage = action.payload
		},
		
  },
});

export const {setPage} = filterSlice.actions

export default filterSlice.reducer