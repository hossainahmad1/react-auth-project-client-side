import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import './Register.css'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext)
    const [passError, setPassError] = useState('')
    // console.log(createUser)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPassError('Please provide al least two uppercase')
            return;
        }
        if (password.length < 6) {
            setPassError('Please provide al least six character');
            return;
        }
        if (!/(?=.*[!@#$%*])/.test(password)) {
            setPassError('Please provide a special character');
            return;
        }
        setPassError('');


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(error => {
                console.error(error)
                setPassError(error.message);
            })
    }

    const handleSignInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error);
            })
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
                    <p className='text-danger'>{passError}</p>
                    <Button className='' variant="primary" type="submit">
                        Register
                    </Button> <br />
                </Form>
                <Button onClick={handleSignInGoogle} className='btn-submit' variant="primary" type="submit">
                    <FaGoogle></FaGoogle>  Register With Google
                </Button>
                <Button className='btn-submit' variant="primary" type="submit">
                    <FaGithub></FaGithub>  Register With Github
                </Button>

            </div>
        </div>
    );
};

export default Register;