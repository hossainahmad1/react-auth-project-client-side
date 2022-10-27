import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideRoute.css'

const LeftSideRoute = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://javascript-server-project.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='leftSide'>
            {
                categories.map(category => <h4 key={category.id}>
                    <Link to={`/categories/${category.id}`}>{category.name}</Link>
                </h4>)
            }
        </div>
    );
};

export default LeftSideRoute;