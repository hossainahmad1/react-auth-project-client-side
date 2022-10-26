import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider/AuthProvider';
import './Login.css';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    // console.log(signIn)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(error => console.error(error))
    }



    return (
        <div className='mt-5'>
            <h2 className='text-center login-header'>Please Log In</h2>
            <div className='login-page'>
                <Form onSubmit={handleSubmit} className='field-items'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <p>New to account? <Link className='toogle-btn' to='/register'>Register Now</Link></p>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    {/* {user?.email && <span>welcome {user?.email}</span>} */}
                </Form>
            </div>
        </div>
    );
};

export default Login;