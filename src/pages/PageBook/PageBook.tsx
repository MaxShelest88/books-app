import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/UI/Loading/Loading';
import { TVolumeInfo } from '../../redux/books/types';
import s from './PageBook.module.scss';

const PageBook = () => {
  const { id } = useParams();
  const URL_API = `https://www.googleapis.com/books/v1/volumes/${id}`;
  const [book, setBook] = React.useState<TVolumeInfo>();

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

  if (!book) {
    return <Loading />;
  }

  return <div className="container">{book?.title}</div>;
};

export default PageBook;
