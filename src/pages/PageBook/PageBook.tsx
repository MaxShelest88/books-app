import axios from 'axios';
import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import IconFavorite from '../../components/UI/Icons/IconFavorite';
import Loading from '../../components/UI/Loading/Loading';
import { selectFavoriteBooks } from '../../redux/favorite/selectors';
import { addItem } from '../../redux/favorite/slice';
import { TFavoriteBook } from '../../redux/favorite/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import s from './PageBook.module.scss';

const PageBook: FC = () => {
  const { id } = useParams();
  const URL_API = `https://www.googleapis.com/books/v1/volumes/${id}`;
  const [book, setBook] = React.useState<TFavoriteBook>();
  const noCoverImage = 'https://books.google.ru/googlebooks/images/no_cover_thumb.gif';
  const favoriteBooks = useAppSelector(selectFavoriteBooks);
  const favoriteBook = favoriteBooks.find((item: TFavoriteBook) => item.id === id);
  const dispatch = useAppDispatch();

  console.log(favoriteBook);

  React.useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(URL_API);
        setBook(res.data.volumeInfo);
      } catch (err) {
        if (axios.isAxiosError(err)) console.log(err.message);
      }
    };
    getBook();
  }, []);

  const handleClick = () => {
    const item = {
      authors: book?.authors,
      categories: book?.categories,
      imageLinks: book?.imageLinks,
      language: book?.language,
      pageCount: book?.pageCount,
      printType: book?.printType,
      publishedDate: book?.publishedDate,
      publisher: book?.publisher,
      subtitle: book?.subtitle,
      title: book?.title,
      description: book?.description,
      id: id,
    };
    if (!favoriteBook) {
      dispatch(addItem(item));
    }
  };

  if (!book) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className={s.book}>
        <div className={s.img}>
          <img src={book.imageLinks ? book.imageLinks?.thumbnail : noCoverImage} alt="обложка" />
        </div>
        <div className={s.content}>
          <div className={s.info}>
            <h2 className={s.title}>{book.title}</h2>
            <div className={s.authors}>{book.authors ? book.authors?.join(' ') : ''}</div>
            <div className={s.publisher}>Издательство: {book.publisher}</div>
            <div className={s.date}>Год публикации: {book.publishedDate?.slice(0, 4)}</div>
            <div className={s.description}>
              Описание:
              <p>{book.description}</p>
            </div>
          </div>
          <div className={s.controls}>
            <Link to="/">
              <Button>Вернуться на главную</Button>
            </Link>
            <Button onClick={handleClick}>
              <span style={{ marginRight: '5px' }}>В Избранное</span>{' '}
              <IconFavorite color="yellow" size="20" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBook;
