import { RootState } from "../store";

export const selectFavoriteBooks = (state: RootState) => state.favorite.items