import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import s from './Home.module.scss';
import Pagination from '../../components/UI/Pagination/Pagination';
import { selectBooks } from '../../redux/books/selectors';
import { fetchBooks } from '../../redux/books/asyncactions';
import { TSearchedBook } from '../../redux/books/types';
import { setPage } from '../../redux/filter/slice';
import { selectCurrentPage, selectQueryOption } from '../../redux/filter/selectors';
import BookItems from '../../components/BookItems/BookItems';

/* 
TODO:
1.Фильты 
2.Клик по книге - полное описание. 
5. Кнопка должна принимать иконку6.
7.Переделать хедер на грид 
11. Сделать пагинацию и подгрузку при скролле
12. Сделать футер
13. Чанки
14. lazyloading картинок
15. storybook
16. eslint
17. компонент не найдено
*/

const Home: React.FC = () => {
  const { query, totalItems, pageCount, maxResults } = useAppSelector(selectBooks);
  const dispatch = useAppDispatch();
  const pageCurrent = useAppSelector(selectCurrentPage);
  const queryOption = useAppSelector(selectQueryOption);

  React.useEffect(() => {
    if (query) {
      dispatch(fetchBooks({ searchValue: query, maxResults, pageCurrent, queryOption }));
    }
  }, [query, maxResults, pageCurrent, queryOption]);

  //   const uniqItems =
  //     items?.length > 0
  //       ? items.reduce<TSearchedBook[]>((uniq, item) => {
  //           const uniqItem = uniq.find((obj) => obj.id === item.id);
  //           if (uniqItem && uniq.includes(uniqItem)) {
  //             return uniq;
  //           } else {
  //             return [...uniq, item];
  //           }
  //         }, [])
  //       : [];

  const onPageChange = (number: number) => {
    dispatch(setPage(number));
  };

  return (
    <section className="books">
      <div className="books__container container">
        <BookItems />
        <Pagination onPageChange={onPageChange} pageCount={pageCount} />
      </div>
    </section>
  );
};

export default Home;
