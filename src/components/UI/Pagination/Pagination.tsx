import React from 'react';
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss';

type Props = { onPageChange: (num: number) => void; pageCount: number };

function Pagination({ onPageChange, pageCount }: Props) {
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
    />
  );
}

export default Pagination;
