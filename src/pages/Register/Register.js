import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
    }


    return (
        <div className='mt-3'>
            <h2 className='text-center register-header'>Please Register Now</h2>
            <div className='register-page'>

                <Form onSubmit={handleSubmit} className='field-items'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>PhotoURL</Form.Label>
                        <Form.Control name='photoURL' type="text" placeholder="photoURL" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <p> Already have an Account? please <Link className='toggle-btn' to='/login'>Log In</Link></p>
                    <Button className='' variant="primary" type="submit">
                        Register
                    </Button> <br />
                </Form>
                <Button className='btn-submit' variant="primary" type="submit">
                    Register With Google
                </Button>
            </div>
        </div>
    );
};

export default Register;