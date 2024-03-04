import React, { useState } from 'react'
import { Product } from '../../typings'
import ReactPaginate from 'react-paginate'
import CatalogContainer from "../../widgets/Catalog/CatalogContainer";


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

const PaginationContainer = ({ products }: Props): React.ReactNode => {
    const [itemsPerPage, setItemsPerPage] = useState<number>(50)
    const [paginationOffset, setPaginationOffset] = useState<number>(0)
    const [pageCount, setPageCount] = useState<number>(0)

    const handlePageClick = (event: MouseEventReactPaginate) => {
        const newOffset = event.selected * itemsPerPage
        setPaginationOffset(newOffset)
    }
    return (
        <>
            <CatalogContainer products={products} setPageCount={setPageCount}/>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    );
};

export default PaginationContainer;
