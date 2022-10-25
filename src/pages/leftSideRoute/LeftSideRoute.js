import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideRoute = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div>
            <h4>this is a LeftSideRoute {categories.length} </h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/rightsideroute/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideRoute;