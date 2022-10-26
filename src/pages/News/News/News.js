import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './News.css'



const News = ({ oneNews }) => {
    const { name, img, details } = oneNews;
    console.log(oneNews)
    return (
        <div className='details-cart'>
            <Card style={{ width: '350px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Button className='me-5' variant="primary">Back to Course</Button>
                    <Button className='ms-4' variant="primary">Checkout</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default News;