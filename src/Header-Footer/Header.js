import React, { useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../component/images/logo-j.jpeg';
import '../Header-Footer/Header.css';

function Header() {
    const location = useLocation();

    useEffect(() => {
        // hr scroll disable
        document.body.style.overflowX = 'hidden';

        // horizontal scroll
        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, []);

    return (
        <Navbar className='navbar' expand="lg" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <Container>
                
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} style={{ marginTop: '-10px' }} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='link mr-auto'>
                        <Nav.Link className={location.pathname === '/' ? 'active' : ''} style={{ color: '#2E8BC0' }} as={Link} to='/'> HOME</Nav.Link>
                        <Nav.Link className={location.pathname === '/about' ? 'active' : ''} style={{ color: '#2E8BC0' }} as={Link} to='/about'>ABOUT US</Nav.Link>
                        <Nav.Link className={location.pathname === '/login' ? 'active' : ''} style={{ color: '#2E8BC0' }} as={Link} to='/login'>LOGIN</Nav.Link>
                        <Nav.Link className={location.pathname === '/signup' ? 'active' : ''} style={{ color: '#2E8BC0' }} as={Link} to='/signup'>REGISTER</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link className='ml-auto'>
                    <Button as={Link} to='/note'  variant="primary">WRITE NOTE</Button>
                </Nav.Link>
            </Container>
        </Navbar>
    )
}

export default Header;
