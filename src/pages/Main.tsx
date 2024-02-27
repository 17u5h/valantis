import React, { useEffect } from 'react'
import * as style from './style.module.scss'
import Header from "../widgets/Header/Header";
import { fetchProducts } from '../services/fetchProducts'
import CatalogContainer from "../widgets/Catalog/CatalogContainer";
import PaginationContainer from "../features/PaginationContainer/PaginationContainer";

const Main = () => {


    return (
        <div className={style.container}>
            <Header/>
            <PaginationContainer />
        </div>
    );
};

export default Main;
