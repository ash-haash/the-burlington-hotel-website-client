import React from 'react';
import { Container } from 'react-bootstrap';

const LiveWell = () => {
    return (
        <Container className="pt-5 mt-5">
            <h2 style={{ color: '#005eb8', marginBottom: '20px', fontWeight: 'bold' }}>Live Well</h2>
            <h5 style={{ fontWeight: 'bold' }}>Advice, tips and tools to help you make the best choices about your health and wellbeing.</h5>

            <div style={{ margin: '50px', fontSize: '20px', backgroundColor: 'white' }}>
                <ul style={{ listStyleType: 'none' }}>
                    <li><a href="#a">5 steps to mental wellbeing</a></li>
                    <li><a href="#a">Healthy weight</a></li>
                    <li><a href="#a">Exercies</a></li>
                    <li><a href="#a">Sleep and tiredness</a></li>
                    <li><a href="#a">Alcohol support</a></li>
                    <li><a href="#a">Quit smoking</a></li>
                    <li><a href="#a">Healthy body</a></li>
                    <li><a href="#a">Sexual health</a></li>
                </ul>
            </div>
        </Container>
    );
};

export default LiveWell;