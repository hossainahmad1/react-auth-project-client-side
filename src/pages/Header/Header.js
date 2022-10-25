import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'





const Header = () => {


    return (
        <Navbar collapseOnSelect className='header' expand="lg" variant="dark">
            <Container>
                <h2 className='logo me-4'>Bullet Javascript</h2>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                    <Nav >
                        <Link className='link' to='/home'>Home</Link>
                        <Link className='link' to='/'>Course</Link>
                        <Link className='link' to='/'>Blog</Link>
                        <Link className='link' to='/login'>Log In</Link>
                        <Link className='link' to='/register'>Register</Link>


                        {/* 
                        {
                            user?.uid ?
                                <button onClick={handleSignOut} className='login'>SignOut</button>
                                :
                                <>
                                    <Link className='login' to='/login'>Login</Link>
                                    <Link className='login' to='/register'>Register</Link>
                                </>
                        } */}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;