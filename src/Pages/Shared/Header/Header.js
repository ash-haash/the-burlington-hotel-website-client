import React from 'react';
import logo from '../../../images/tbh.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar style={{ backgroundColor: 'black' }} variant="dark" fixed="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">
                        <img
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="The Burlington Hotel Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content">
                        <Nav className="me-auto bold">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/addService">Add Service</Nav.Link>
                            <Nav.Link as={HashLink} to="/deleteServices">Delete Service</Nav.Link>
                            {user?.email ?
                                <Button onClick={logOut} variant="light">Log Out</Button> :
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}
                        </Nav>
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;