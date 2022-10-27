import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutDetails from '../CheckOutDetails/CheckOutDetails';

const CheckOut = () => {
    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/news')
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, [])

    const items = useLoaderData();
    console.log(items)
    return (
        <div>
            <h4>thsi is a CheckOut page </h4>
            <div>
                {/* {
                    items.map(item => <CheckOutDetails
                        key={item.id}
                        item={item}
                    ></CheckOutDetails>)
                } */}
            </div>
        </div>
    );
};

export default CheckOut;