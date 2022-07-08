import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/hooks';
import { fetchBooks } from '../redux/searchedBooks/asyncactions';
import { selectSearchedBooks } from '../redux/searchedBooks/selectors';
import { TSearchedBook } from '../redux/searchedBooks/types';
import BookBlock from '../components/BookBlock/BookBlock';
import Input from '../components/Input/Input';

const Home: React.FC = () => {
  const { items, searchValue } = useSelector(selectSearchedBooks);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    searchValue && dispatch(fetchBooks(searchValue));
  }, [searchValue]);

  const uniqItems = items.reduce<TSearchedBook[]>((uniq, item) => {
    const uniqItem = uniq.find((obj) => obj.id === item.id);
    if (uniqItem && uniq.includes(uniqItem)) {
      return uniq;
    } else {
      return [...uniq, item];
    }
  }, []);

  return (
    <main className="main">
      <div className="container">
        {uniqItems.map((item: TSearchedBook) => (
          <BookBlock {...item} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
