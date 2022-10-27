import React, { useState } from 'react';
import { useEffect } from 'react';
import CheckOutDetails from '../CheckOutDetails/CheckOutDetails';


const CheckOut = () => {
    const [items, setItems] = useState([]);
    // console.log(items)

    useEffect(() => {
        fetch('https://javascript-server-project.vercel.app/news')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <div className='cart-design'>
                {
                    items.map(item => <CheckOutDetails
                        key={item.id}
                        item={item}
                    ></CheckOutDetails>)
                }
            </div>
        </div>
    );
};

export default CheckOut;