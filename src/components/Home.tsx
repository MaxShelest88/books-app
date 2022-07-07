import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/hooks';
import { fetchBooks } from '../redux/searchedBooks/asyncactions';
import { selectSearchedBooks } from '../redux/searchedBooks/selectors';
import { TSearchedBook } from '../redux/searchedBooks/types';
import BookBlock from './BookBlock/BookBlock';
import Input from './Input/Input';

const Home: React.FC = () => {
  const { items } = useSelector(selectSearchedBooks);
  const dispatch = useAppDispatch();

  const getSearchedBooks = () => {
    dispatch(fetchBooks());
  };

  React.useEffect(() => {
    getSearchedBooks();
  }, []);

  const uniqItems = items.reduce<TSearchedBook[]>((uniq, item) => {
    const uniqItem = uniq.find((obj) => obj.id === item.id);
    if (uniqItem && uniq.includes(uniqItem)) {
      return uniq;
    } else {
      return [...uniq, item];
    }
  }, []);

  return (
    <div>
      <Input />
      {uniqItems.map((item: TSearchedBook) => (
        <BookBlock {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Home;
