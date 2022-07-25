import { current } from '@reduxjs/toolkit';
import React from 'react';
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss';

type TPagination = { onPageChange: (num: number) => void; pageCount: number; pageCurrent: number };

const Pagination: React.FC<TPagination> = ({ onPageChange, pageCount, pageCurrent }) => {
  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onPageChange(e.selected)}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={() => null}
      forcePage={pageCurrent}
    />
  );
};

export default Pagination;
