import React, {useEffect, useState} from 'react'
import * as style from './style.module.scss'
import {Product} from "../../typings";
import {fetchProducts} from "../../services/fetchProducts";

type Props = {
    setPageCount: React.SetStateAction<number>
}

const CatalogContainer = ({ setPageCount }: Props) => {
    const [products, setProducts] = useState<Product[]>(null)
    const maxItemsPerPage = 100


    useEffect(() => {
        fetchProducts('get_ids')
    }, [])


    return (
        <div className={style.container}>

        </div>
    );
};

export default CatalogContainer;
