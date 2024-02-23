import React, { useState } from 'react'
import { Product } from '../../typings'
import ReactPaginate from "react-paginate";
import { ReactPaginateProps } from 'react-paginate'


type Props = {
    itemsPerPage: number
    products: Product[]
}

type MouseEventReactPaginate = {
    index: number | null;
    selected: number;
    nextSelectedPage: number | undefined;
    event: object;
    isPrevious: boolean;
    isNext: boolean;
    isBreak: boolean;
    isActive: boolean;
}

const PaginationContainer = ({itemsPerPage, products}: Props): React.ReactNode => {
    const [itemOffset, setItemOffset] = useState<number>(0)
    const endOffset = itemOffset + itemsPerPage
    const currentItems = products.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(products.length / itemsPerPage)

    const handlePageClick = (event: MouseEventReactPaginate) => {
        const newOffset = (event.selected * itemsPerPage) % products.length
        setItemOffset(newOffset)
    }
    return (
        <>
            <Items currentItems={products}/>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
};

export default PaginationContainer;
