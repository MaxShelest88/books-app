import React from 'react';
import { useSelector } from 'react-redux';
import BookBlock from './components/BookBlock/BookBlock';
import Home from './components/Home';
import Input from './components/Input/Input';
import { selectSearchedBooks } from './redux/searchedBooks/selectors';
import { TSearchedBook } from './redux/searchedBooks/types';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
