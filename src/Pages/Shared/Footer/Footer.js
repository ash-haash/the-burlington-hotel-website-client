import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container style={{ borderTop: '3px solid #005eb8', padding: '50px', backgroundColor: '#d8dde0' }}>
            <Row className="gx-5">
                <Col lg="4" md="6" sm="12">
                    <Link to="#a">NHS sites</Link><br></br>
                    <Link to="#a">NHS App</Link><br></br>
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
                    <span>&copy; Crown copyright</span><br></br>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;