import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideRoute.css'

const LeftSideRoute = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div>
            <div className='laftSide'>
                {
                    categories.map(category => <h4 key={category.id}>
                        <Link to={`/categories/${category.id}`}>{category.name}</Link>
                    </h4>)
                }
            </div>
        </div>
    );
};

export default LeftSideRoute;