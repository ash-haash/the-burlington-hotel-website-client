import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const error = <FontAwesomeIcon icon={faFrown} />
    return (
        <div>
            <p style={{ color: "#005eb8", fontSize: "300px" }}>{error}</p>
            <h1 style={{ color: '#005eb8', fontSize: "80px", marginTop: "10px" }}>404</h1>
            <h1 style={{ color: '#005eb8', fontSize: "", marginTop: "10px" }}>Page Not Found</h1>
            <p style={{ color: '#005eb8', fontFamily: 'sans-serif', marginTop: "20px", marginBottom: "60px" }}>The page you are looking for doesn't exist or an other error occurred.<br></br>Go back, or head over to navigation bar to choose a new direction.</p>
            <Link style={{ paddingBottom: '50px' }} to="/"><button className="btn btn-primary">Go Back</button></Link>
        </div>
    );
};

export default NotFound;