import { useSearchParams } from "react-router-dom";
import { fetchBooks } from "../redux/books/asyncactions";
import { setSearchValue, setMaxResults } from "../redux/books/slice";
import { setSort, setPage, setQueryOption } from "../redux/filter/slice";
import { useAppDispatch } from "../redux/hooks";

export const useGetSearchParams = () => {
	const dispatch = useAppDispatch()
	const [search, setSearch] = useSearchParams();
	const getSearchParams = () => {
		if (window.location.search) {
      const colonIndex = search.get('q')?.indexOf(':');
      const query = String(search.get('q')?.slice(colonIndex && colonIndex + 1));
      const queryOption = String(search.get('q')?.slice(0, colonIndex));
      const startIndex = Number(search.get('startIndex'));
      const maxResults = Number(search.get('maxResults'));
      const sort = String(search.get('orderBy'));
      dispatch(
        fetchBooks({
          query,
          maxResults,
          queryOption,
          sort,
        }),
      );
      dispatch(setSort(sort));
      dispatch(setSearchValue(query));
      dispatch(setPage(startIndex / maxResults));
		dispatch(setMaxResults(maxResults));
		dispatch(setQueryOption(queryOption))
    }
	}
	return getSearchParams
}