import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DetailsCart from '../DetailsCart/DetailsCart';
import './RightSideRoute.css'


const RightSideRoute = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://javascript-server-project.vercel.app/news')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return (
        <div>
            <div className=' cart-design'>
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