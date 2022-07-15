import React from 'react';
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss';

type Props = {
  pageCount: number;
  onPageChange: (number: number) => void;
};

function Pagination({ onPageChange, pageCount }: Props) {
  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onPageChange(event.selected)}
      pageRangeDisplayed={10}
      pageCount={pageCount}
      previousLabel="<"
    />
  );
}

export default Pagination;
