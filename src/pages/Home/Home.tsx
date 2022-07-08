import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/hooks';
import { fetchBooks } from '../../redux/searchedBooks/asyncactions';
import { selectSearchedBooks } from '../../redux/searchedBooks/selectors';
import { TSearchedBook } from '../../redux/searchedBooks/types';
import BookBlock from '../../components/BookBlock/BookBlock';
import s from './Home.module.scss'

const Home: React.FC = () => {
  const { items, searchValue, status } = useSelector(selectSearchedBooks);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchBooks(searchValue));
  }, [searchValue]);

  const uniqItems = items.reduce<TSearchedBook[]>((uniq, item) => {
    const uniqItem = uniq.find((obj) => obj.id === item.id);
    if (uniqItem && uniq.includes(uniqItem)) {
      return uniq;
    } else {
      return [...uniq, item];
    }
  }, []);
	
	const books = uniqItems.map((item: TSearchedBook) => <BookBlock {...item} key={item.id} />);

  return (
    <section className="books">
      <div className="books__container container">
        <div className={s.title}>Книги</div>
        <div className={s.items}>{status === 'loading' ? <div>Загрузка</div> : books}</div>
      </div>
    </section>
  );
};

export default Home;
