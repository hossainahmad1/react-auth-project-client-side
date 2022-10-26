import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DetailsCart from '../DetailsCart/DetailsCart';
import './RightSideRoute.css'


const RightSideRoute = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return (
        <div>
            <h4>this is a rightsideRoute has news {data.length}  </h4>
            <div className='cart-design'>
                {
                    data.map(oneData => <DetailsCart
                        key={oneData.id}
                        oneData={oneData}
                    ></DetailsCart>)
                }
            </div>
        </div>
    );
};

export default RightSideRoute;