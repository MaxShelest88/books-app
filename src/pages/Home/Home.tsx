import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/hooks';
import { fetchBooks } from '../../redux/searchedBooks/asyncactions';
import { selectSearchedBooks } from '../../redux/searchedBooks/selectors';
import { TSearchedBook } from '../../redux/searchedBooks/types';
import BookBlock from '../../components/BookBlock/BookBlock';
import s from './Home.module.scss';
import PageLoading from '../../components/UI/Loading/Loading';
import { setItems, setStatus } from '../../redux/searchedBooks/slice';

//TODO: 1.Фильты 2.Клик по книге - полное описание. 3. Добавить в избранное, 4. бесконечный скролл

const Home: React.FC = () => {
  const { items, searchValue, status } = useSelector(selectSearchedBooks);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (searchValue) {
      dispatch(fetchBooks(searchValue));
    } else {
      dispatch(setItems([]));
      dispatch(setStatus('idle'));
    }
  }, [searchValue]);

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

  return (
    <section className="books">
      <div className="books__container container">{renderBooks(status)}</div>
    </section>
  );
};

export default Home;
