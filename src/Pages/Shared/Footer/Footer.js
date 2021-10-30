import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container style={{ borderTop: '3px solid black', padding: '50px', backgroundColor: '#1b1b1b' }}>
            <Row className="gx-5 text-white">
                <Col lg="4" md="6" sm="12">
                    <Link to="#a">TBH sites</Link><br></br>
                    <Link to="#a">TBH App</Link><br></br>
                    <Link to="#a">About us</Link><br></br>
                </Col>
                <Col>
                    <Link to="#a">Contact us</Link><br></br>
                    <Link to="#a">Profile editor login</Link><br></br>
                    <Link to="#a">Site map</Link><br></br>
                </Col>
                <Col>
                    <Link to="#a">Accessibility statement</Link><br></br>
                    <Link to="#a">Our policies</Link><br></br>
                    <Link to="#a">Cookies</Link><br></br>
                    <span>&copy; tbh copyright</span><br></br>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;