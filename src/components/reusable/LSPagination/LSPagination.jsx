import React, {useEffect, useState} from "react";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";
import PropTypes from "prop-types";
import { itemsPerPage } from '../../commons/pagination-utils';

const LSPagination = (props) => {
    const { totalItems, perPageSize, handleOnFetchCurrentPage, handleOnSetItemsPerPage, searchText, handleOnFetchNumberOfPages } = props;
    const [currentPage, setCurrentPage] = useState(props.currentPage);
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(10);
    const [noOfPages, setNoOfPages] = useState([]);
    const [pagesCount, setPagesCount] = useState(Math.ceil(totalItems.length / perPageSize));
    const [pages, setPages] = useState(perPageSize);

    useEffect(() => {
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        setNoOfPages([...pages]);
    }, [pagesCount])

    const handleClick = (e, index) => {
        e.preventDefault();
        setCurrentPage(index);
    }

    useEffect(() => {
        setPagesCount(Math.ceil(totalItems.length / perPageSize));
        handleOnSetItemsPerPage();
    }, [pages])

    useEffect(() => {
        handleOnFetchCurrentPage(currentPage);
        handleOnSetItemsPerPage();
        if (currentPage === end) {
            setStart(end + 1);
            setEnd(end + 10);
        } else if (currentPage === start - 2 && currentPage > 1) {
            setEnd(start - 1);
            setStart(start - 10);
        } else if (currentPage === 0) {
            setStart(1);
            setEnd(10);
        }
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(0);
        setPagesCount(Math.ceil(totalItems.length / perPageSize));
        handleOnSetItemsPerPage();
    }, [searchText])

    const handleOnSelectNumberOfPages = (event) => {
        handleOnFetchNumberOfPages(event.target.value);
        setPages(event.target.value);
    }

    return (
        <div>
            <Pagination>
                <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink
                        onClick={e => handleClick(e, currentPage - 1)}
                        previous
                        href="#"
                    />
                </PaginationItem>
                {noOfPages.map((page, i) => {
                        if (page >= start && page <= end) {
                            return <PaginationItem active={i === currentPage} key={i}>
                                <PaginationLink onClick={e => handleClick(e, i)} href="#">
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        }
                    }
                )}
                <PaginationItem disabled={currentPage >= pagesCount - 1}>
                    <PaginationLink
                        onClick={e => handleClick(e, currentPage + 1)}
                        next
                        href="#"
                    />
                </PaginationItem>
                <select onChange={handleOnSelectNumberOfPages} disabled={currentPage > 0} value={pages}>
                    {itemsPerPage.map(page =>
                        <>
                            <option value={page}>{page}</option>
                        </>
                    )}
                </select>
            </Pagination>
        </div>
    )
}

LSPagination.propTypes = {
    totalItems: PropTypes.array,
    perPageSize: PropTypes.number,
    handleOnFetchCurrentPage: PropTypes.func.isRequired,
    handleOnSetItemsPerPage: PropTypes.func.isRequired,
    searchText: PropTypes.string,
    handleOnFetchNumberOfPages: PropTypes.func.isRequired,
    currentPage: PropTypes.number
}

export default LSPagination;
