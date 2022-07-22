import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import s from './PageHome.module.scss';
import Pagination from '../../components/UI/Pagination/Pagination';
import { selectBooks } from '../../redux/books/selectors';
import { fetchBooks } from '../../redux/books/asyncactions';
import { setPage, setSort } from '../../redux/filter/slice';
import { selectCurrentPage, selectQueryOption, selectSort } from '../../redux/filter/selectors';
import BookItems from '../../components/BookItems/BookItems';
import { useSearchParams } from 'react-router-dom';
import { setMaxResults, setSearchValue, setTotalItems } from '../../redux/books/slice';
import NotFound from '../../components/NotFound/NotFound';
import { selectFavoriteBooks } from '../../redux/favorite/selectors';

/* 
TODO:
2.Клик по книге - полное описание. 
7.Переделать хедер на грид 
13. Чанки
15. storybook
16. eslint
17. компонент не найдено
18. Оптимизация memo
19. хук useFetch
*/

const Home: React.FC = () => {
  const { query, pageCount, maxResults, items } = useAppSelector(selectBooks);
  const dispatch = useAppDispatch();
  const pageCurrent = useAppSelector(selectCurrentPage);
  const queryOption = useAppSelector(selectQueryOption);
  const sort = useAppSelector(selectSort);
  const [search, setSearch] = useSearchParams();
  const isMounted = React.useRef(false);
  const favItems = useAppSelector(selectFavoriteBooks);

  React.useEffect(() => {
    if (query && isMounted.current) {
      dispatch(fetchBooks({ searchValue: query, maxResults, pageCurrent, queryOption, sort }));
      setSearch({
        q: `${queryOption}:${query}`,
        startIndex: String(pageCurrent * maxResults),
        maxResults: String(maxResults),
        printType: 'books',
        orderBy: sort,
      });
    }
    isMounted.current = true;
  }, [pageCurrent, maxResults, sort]);

  React.useEffect(() => {
    if (window.location.search) {
      const colonIndex = search.get('q')?.indexOf(':');
      const searchValue = String(search.get('q')?.slice(colonIndex && colonIndex + 1));
      const queryOption = String(search.get('q')?.slice(0, colonIndex));
      const startIndex = Number(search.get('startIndex'));
      const maxResults = Number(search.get('maxResults'));
      const sort = String(search.get('orderBy'));
      dispatch(
        fetchBooks({
          searchValue,
          maxResults,
          queryOption,
          sort,
        }),
      );
      dispatch(setSort(sort));
      dispatch(setSearchValue(searchValue));
      dispatch(setPage(startIndex / maxResults));
      dispatch(setMaxResults(maxResults));
    }
    isMounted.current = true;
  }, []);

  const onPageChange = React.useCallback((number: number) => {
    dispatch(setPage(number));
  }, []);

  {
    return (
      <section className="books">
        <div className="books__container container">
          {items ? <BookItems /> : <NotFound />}
          <Pagination onPageChange={onPageChange} pageCount={pageCount} pageCurrent={pageCurrent} />
        </div>
      </section>
    );
  }
};

export default Home;
