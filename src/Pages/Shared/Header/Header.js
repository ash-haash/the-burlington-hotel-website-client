import React from 'react';
import logo from '../../../images/nhs.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar style={{ backgroundColor: '#005eb8' }} variant="dark" fixed="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">
                        <img
                            src={logo}
                            width="70"
                            height="30"
                            className="d-inline-block align-top"
                            alt="The NHS UK logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content">
                        <Nav className="me-auto bold">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/livewell">Live Well</Nav.Link>
                            <Nav.Link as={HashLink} to="/pregnancy">Pregnancy</Nav.Link>
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