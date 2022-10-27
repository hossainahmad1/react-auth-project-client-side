import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import './Header.css'
import logo from '../../assets/image/image.jpg'
import { AuthContext } from '../../AuthProvider/AuthProvider/AuthProvider';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';





const GlobalStyles = createGlobalStyle`
button{
    backgroun-color: ${(props) => props.theme.button};
}
`;

const StyledApp = styled.div`
 color: ${(props) => props.theme.fontColor}
`;


const lightTheme = {
    button: '#fff',
    fontColor: '#000'
}

const darkTheme = {
    button: '#000',
    fontColor: '#fff'
}


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // toggle theme
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <Navbar collapseOnSelect className='header' expand="lg" variant="dark">
            <Container>
                <img className='icon' src={logo} alt="" />
                <h2 className=' me-3'>Bullet Javascript</h2>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className='ms-auto toggle'>
                        <ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
                            <GlobalStyles />
                            <StyledApp>
                                <Button onClick={toggleTheme} className='me-2' variant="dark" size="lg" active>
                                    Toggle Mode
                                </Button>
                            </StyledApp>
                        </ThemeProvider>
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
                                <Image title={user?.displayName} style={{ height: '30px' }} roundedCircle src={user?.photoURL} ></Image>
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