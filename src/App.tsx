import axios from 'axios';
import React from 'react';
import Book from './components/Book/Book';
import Input from './components/Input/Input';
import './scss/app.scss';

const API_KEY = 'AIzaSyD8ck4vCeuXZdhB9iK7ptRFjlL84y-7lJw';

function App() {
  const [books, setBooks] = React.useState<>();
  const fetchBooks = async () => {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${API_KEY}`,
    );
    setBooks(res.data.items);
  };

  React.useEffect(() => {
    fetchBooks();
    console.log(books);
  }, []);

  return (
    <div className="App">
      <Input />
      {books &&
        books
          .reduce((uniq, item) => {
            const uniqItem = uniq.find((uniqItem) => uniqItem.id === item.id);
            return uniq.includes(uniqItem) ? uniq : [...uniq, item];
          }, [])
          .map((item) => <Book {...item} key={item.id} />)}
    </div>
  );
}

export default App;
