import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
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

    // const togglebtnDark = () => {

    // }


    return (
        <Navbar collapseOnSelect className='header' expand="lg" variant="dark">
            <Container>
                <img className='icon' src={logo} alt="" />
                <h2 className='logo me-3'>Bullet Javascript</h2>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* <Nav className="me-auto">
                        <Form className="d-flex ms-4">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav> */}

                    <Nav className='ms-auto toggle'>
                        <Button className='me-2' variant="dark" size="lg" active>
                            Dark
                        </Button>
                        <Button variant="light" size="lg" active>
                            Light
                        </Button>
                    </Nav>


                    <Nav className='navber-btn'>
                        <Link className='link' to='/home'>Home</Link>
                        <Link className='link' to='/course'>Course</Link>
                        <Link className='link' to='/blog'>Blog</Link>


                        {
                            user?.uid ?
                                <button onClick={handleSignOut} className='link'>SignOut</button>
                                :
                                <>
                                    <Link className='link' to='/login'>Login</Link>
                                    <Link className='link' to='/register'>Register</Link>
                                </>
                        }
                        <Nav.Link >
                            {user?.photoURL ?
                                <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL} ></Image>
                                : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;