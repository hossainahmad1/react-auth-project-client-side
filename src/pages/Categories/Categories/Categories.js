import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Categories = () => {

    const news = useLoaderData()

    return (
        <div>
            <h4>this si categories has news {news.length}</h4>
        </div>
    );
};

export default Categories;