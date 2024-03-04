import React, {useEffect, useState} from 'react'
import * as style from './style.module.scss'
import {Product} from "../../typings";
import {fetchProducts} from "../../services/fetchProducts";
import Loader from "../../shared/Loader/Loader";

type Props = {
    setPageCount: React.SetStateAction<number>
}

const CatalogContainer = ({ setPageCount }: Props) => {
    const [products, setProducts] = useState<Product[]>(null)
    const [isFetching, setIsFetching] = useState<boolean>(false)
    const maxItemsPerPage = 100


    useEffect(() => {
        fetchProducts('get_ids', setIsFetching)
    }, [])


    return (
        isFetching
            ? <Loader/>
            : <div className={style.container}>

            </div>
    )
}

export default CatalogContainer;
