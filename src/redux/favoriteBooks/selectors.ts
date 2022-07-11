import { RootState } from "../store";

export const selectFavoriteBooks = (state: RootState) => state.favoriteBooks.items