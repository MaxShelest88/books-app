import { createSlice } from '@reduxjs/toolkit'
import { IFilterState } from './types';


const initialState:IFilterState = {
	currentPage: 0,
	queryOption: 'intitle',
	sort: 'relevance',        
	
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
	reducers: {
		setPage(state, action) {
			state.currentPage = action.payload
		},
		setQueryOption(state, action) {
			state.queryOption = action.payload
		},
		setSort(state, action) {
			state.sort = action.payload
		}
  },
});

export const {setPage,setQueryOption,setSort} = filterSlice.actions

export default filterSlice.reducer