import { TFavoriteBook } from "../redux/favorite/types";

export const getFavoriteFormLS = () => {
		const data = localStorage.getItem('favoriteBooks')
      const items:TFavoriteBook[] = data ? JSON.parse(data) : []
      return items
  };