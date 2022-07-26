import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import s from './PageHome.module.scss';
import Pagination from '../../components/UI/Pagination/Pagination';
import { selectBooks } from '../../redux/books/selectors';
import { setPage } from '../../redux/filter/slice';
import { selectCurrentPage, selectQueryOption, selectSort } from '../../redux/filter/selectors';
import BookItems from '../../components/BookItems/BookItems';
import { useFetchAndSearchParams } from '../../hooks/useFetch';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';

/* 
TODO:
15. storybook
16. eslint
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
          {items ? (
            <BookItems items={items} />
          ) : (
            <div className={s.body}>
              <h1 className={s.title}>Книги не найдены</h1>
              <p className={s.description}>Повторите поиск</p>
            </div>
          )}
          <Pagination onPageChange={onPageChange} pageCount={pageCount} pageCurrent={pageCurrent} />
        </div>
      </section>
    );
  }
};

export default Home;
