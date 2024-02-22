import React, { useEffect } from 'react'
import * as style from './style.module.scss'
import Header from "../widgets/Header";
import { fetchProducts } from '../services/fetchProducts'

const Main = () => {
    useEffect(() => {
        fetchProducts('get_ids', {offset: 10, limit: 3})
    }, [])

    return (
        <div className="container">
            <Header/>
        </div>
    );
};

export default Main;
