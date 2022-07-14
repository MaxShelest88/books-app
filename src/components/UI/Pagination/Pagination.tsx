import React from 'react';
import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { fetchBooks } from '../../../redux/searchedBooks/asyncactions';
import { selectSearchedBooks } from '../../../redux/searchedBooks/selectors';
import s from './Pagination.module.scss';

type Props = {};

function Pagination({}: Props) {
	const itemsPerPage = 12;
	const dispatch = useAppDispatch()

  const { totalItems } = useAppSelector(selectSearchedBooks);
	const [itemOffset, setItemOffset] = React.useState(0);
	const [pageCount, setPageCount] = React.useState(0);
	
	  React.useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
		  setPageCount(Math.ceil(totalItems / itemsPerPage));
		  dispatch(fetchBooks(_,))
    }, [itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalItems;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={10}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
