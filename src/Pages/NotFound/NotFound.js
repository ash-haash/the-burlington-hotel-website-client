import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    const error = <FontAwesomeIcon icon={faFrown} />
    return (
        <Container className="my-5">
            <p style={{ color: "dark", fontSize: "300px" }}>{error}</p>
            <h1 style={{ color: 'black', fontSize: "80px", marginTop: "10px" }}>404</h1>
            <h1 style={{ color: 'black', fontSize: "", marginTop: "10px" }}>Page Not Found</h1>
            <p style={{ color: 'black', fontFamily: 'sans-serif', marginTop: "20px", marginBottom: "60px" }}>The page you are looking for doesn't exist or an other error occurred.<br></br>Go back, or head over to navigation bar to choose a new direction.</p>
            <Link style={{ paddingBottom: '50px' }} to="/"><button className="btn btn-dark">Go Back</button></Link>
        </Container>
    );
};

export default NotFound;