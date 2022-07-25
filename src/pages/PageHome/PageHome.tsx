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
import { setMaxResults, setSearchValue } from '../../redux/books/slice';
import NotFound from '../../components/NotFound/NotFound';
import { useFetchAndSearchParams } from '../../hooks/useFetch';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';

/* 
TODO:
13. Чанки
15. storybook
16. eslint
18. Оптимизация memo
19. хук useFetch
*/

const Home: React.FC = () => {
  const { query, pageCount, maxResults, items } = useAppSelector(selectBooks);
  const dispatch = useAppDispatch();
  const pageCurrent = useAppSelector(selectCurrentPage);
  const queryOption = useAppSelector(selectQueryOption);
  const sort = useAppSelector(selectSort);
  const isMounted = React.useRef(false);
  const fetchAndSearchParams = useFetchAndSearchParams();
  const getSearchParams = useGetSearchParams();

  React.useEffect(() => {
    if (query && isMounted.current) {
      fetchAndSearchParams({ query, maxResults, pageCurrent, queryOption, sort });
    }
    isMounted.current = true;
  }, [pageCurrent, maxResults, sort]);

  React.useEffect(() => {
    getSearchParams();
    isMounted.current = true;
  }, []);

  const onPageChange = React.useCallback((number: number) => {
    dispatch(setPage(number));
  }, []);

  {
    return (
      <section className="books">
        <div className="books__container container">
          {items ? <BookItems items={items} /> : <NotFound />}
          <Pagination onPageChange={onPageChange} pageCount={pageCount} pageCurrent={pageCurrent} />
        </div>
      </section>
    );
  }
};

export default Home;
