import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckOutDetails = ({ item }) => {
    const { author, name, img, details } = item;
    console.log(item)

    return (
        <div className='details-cart'>
            <Card style={{ width: '350px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>

                    <Link>
                        <Button className='ms-4' variant="primary">Checkout</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CheckOutDetails;