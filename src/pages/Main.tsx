import React, { useEffect } from 'react'
import * as style from './style.module.scss'
import Header from "../widgets/Header/Header";
import { fetchProducts } from '../services/fetchProducts'
import Catalog from "../widgets/Catalog/Catalog";

const Main = () => {
    useEffect(() => {
        fetchProducts('get_ids', {offset: 10, limit: 3})
    }, [])

    return (
        <div className={style.container}>
            <Header/>
            <Catalog/>
        </div>
    );
};

export default Main;
