import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './CheckOutDetails.css'

const CheckOutDetails = ({ item }) => {
    const {id, author, name, img, details } = item;
    console.log(item)


    return (
        <div className='cart-details'>
            <Card style={{ width: '350px' }}>
                <Card.Img className='full-photo' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>

                    <div className='cart-footer'>
                        <Link to='/'>
                            <Button className='' variant="primary">Back To Home</Button>
                        </Link>
                        <Link to='/pdffile'>
                            <Button className='' variant="primary">Download PDF</Button>
                        </Link>
                        <div>
                            <Image className='images-design' src={author} alt="" />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CheckOutDetails;