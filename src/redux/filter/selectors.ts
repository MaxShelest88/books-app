import { RootState } from "../store";

export const selectCurrentPage = (state: RootState) => state.filter.currentPage
export const selectQueryOption = (state: RootState) => state.filter.queryOption
export const selectSort = (state: RootState) => state.filter.sort
