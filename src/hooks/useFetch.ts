import { useSearchParams } from "react-router-dom";
import { fetchBooks } from "../redux/books/asyncactions";
import { TFetchBooksArgs } from "../redux/books/types";
import { useAppDispatch } from "../redux/hooks";

export const useFetchAndSearchParams = () => {
	const dispatch = useAppDispatch()
	 const [search, setSearch] = useSearchParams();
	const fetchAndSetParams = ({ query, maxResults, pageCurrent, queryOption, sort }: TFetchBooksArgs) => {
		dispatch(fetchBooks({ query, maxResults, pageCurrent, queryOption, sort }));
		setSearch({
        q: `${queryOption}:${query}`,
        startIndex: String(pageCurrent && maxResults&& pageCurrent * maxResults),
        maxResults: String(maxResults),
        printType: 'books',
        orderBy: String(sort),
      });
	}

	return fetchAndSetParams
}