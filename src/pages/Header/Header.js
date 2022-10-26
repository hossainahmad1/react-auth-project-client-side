import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/image/image.jpg'
import { AuthContext } from '../../AuthProvider/AuthProvider/AuthProvider';




const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <Navbar collapseOnSelect className='header' expand="lg" variant="dark">
            <Container>
                <img className='icon' src={logo} alt="" />
                <h2 className='logo me-3'>Bullet Javascript</h2>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Form className="d-flex ms-4">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                    <Nav>
                        <Link className='link' to='/home'>Home</Link>
                        <Link className='link' to='/course'>Course</Link>
                        <Link className='link' to='/blog'>Blog</Link>
                        {/* <Link className='link' to='/login'>Log In</Link>
                        <Link className='link' to='/register'>Register</Link> */}

                        {
                            user?.uid ?
                                <button onClick={handleSignOut} className='link'>SignOut</button>
                                :
                                <>
                                    <Link className='link' to='/login'>Login</Link>
                                    <Link className='link' to='/register'>Register</Link>
                                </>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;