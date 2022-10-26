import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const DetailsCart = ({ oneData }) => {

    const { id, img, name, details } = oneData;

    return (
        <div>
            <Card style={{ height: '400px' }}>
                <Card.Img style={{ height: '200px', width: '300px', marginLeft: '7px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 100 ?
                                <p>{details.slice(0, 100) + '...'}</p>
                                : <p>{details}</p>
                        }
                    </Card.Text>
                    <Link to={`/categories/${id}`}>
                        <Button variant="primary">Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DetailsCart;