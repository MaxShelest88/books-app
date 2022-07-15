import React from 'react';
import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { fetchBooks } from '../../../redux/books/asyncactions';
import { selectSearchedBooks } from '../../../redux/books/selectors';
import s from './Pagination.module.scss';

type Props = { onChangePage: (num: number) => void; pageCount: number };

function Pagination({ onChangePage, pageCount }: Props) {
  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected)}
      pageRangeDisplayed={10}
      pageCount={pageCount}
      previousLabel="<"
      // renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
