import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import BookBlock from '../../components/BookBlock/BookBlock';
import s from './Home.module.scss';
import PageLoading from '../../components/UI/Loading/Loading';
import Pagination from '../../components/UI/Pagination/Pagination';
import { selectBooks } from '../../redux/books/selectors';
import { fetchBooks } from '../../redux/books/asyncactions';
import { TSearchedBook } from '../../redux/books/types';
import { setPage } from '../../redux/books/slice';


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
  const { items, status, totalItems, searchValue, currentPage } = useAppSelector(selectBooks);
  const dispatch = useAppDispatch();
  const [maxResults, setMaxResults] = React.useState<number>(12);
  const pageCurrent = useAppSelector(selectCurrentPage);

  React.useEffect(() => {
    if (searchValue) {
      dispatch(fetchBooks({ searchValue, maxResults, pageCurrent }));
    }
  }, [searchValue, maxResults, pageCurrent]);

  const uniqItems =
    items?.length > 0
      ? items.reduce<TSearchedBook[]>((uniq, item) => {
          const uniqItem = uniq.find((obj) => obj.id === item.id);
          if (uniqItem && uniq.includes(uniqItem)) {
            return uniq;
          } else {
            return [...uniq, item];
          }
        }, [])
      : [];

  const books = uniqItems?.map((item: TSearchedBook) => <BookBlock {...item} key={item.id} />);

  const onChangePage = (num: number) => {
    dispatch(setPage(num));
  };

  const renderBooks = (status: string) => {
    switch (status) {
      case 'idle':
        return <div></div>;
      case 'loading':
        return <PageLoading />;
      case 'success':
        return (
          <>
            <div className={s.title}>Найденные книги</div>
            <div className={s.items}>{books.length > 0 ? books : <div>Книги не найдены</div>}</div>
          </>
        );
      case 'error':
        return <div>Что-то пошло не так</div>;
    }
  };

  const onPageChange = (number: number) => {
    dispatch(setPage(number));
  };

  return (
    <section className="books">
      <div className="books__container container">
        {renderBooks(status)}
<<<<<<< HEAD
        <Pagination onChangePage={onChangePage} pageCount={10} />
=======
        <Pagination onPageChange={onPageChange} pageCount={pageCount} />
>>>>>>> 80ec3fdd4b32ab843914adc3a82155b13112212d
      </div>
    </section>
  );
};

export default Home;
