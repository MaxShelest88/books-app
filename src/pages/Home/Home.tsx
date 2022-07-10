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
    if(searchValue){
      dispatch(fetchBooks(searchValue));
    }
    console.log(items)
  }, [searchValue]);

  const uniqItems = items?.length > 0 ? items.reduce<TSearchedBook[]>((uniq, item) => {
    const uniqItem = uniq.find((obj) => obj.id === item.id);
    if (uniqItem && uniq.includes(uniqItem)) {
      return uniq;
    } else {
      return [...uniq, item];
    }
  }, []) : []
	
	const books = uniqItems?.map((item: TSearchedBook) => <BookBlock {...item} key={item.id} />);

  return (
    <section className="books">
      <div className="books__container container">
        {
          status === "loading"
            ?
            <div>Загрузка</div>
            :
            <>
              <div className={s.title}>Книги</div>
              <div className={s.items}>{books.length > 0 ? books : <div>Книги не найдены</div>}</div>
            </>
        }
        {
          status === "error" && <div>Что-то пошло не так</div>
        }

      </div>
    </section>
  );
};

export default Home;
