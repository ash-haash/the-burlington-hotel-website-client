import React from 'react';
import { Container } from 'react-bootstrap';

const Pregnancy = () => {
    return (
        <Container className="pt-5 mt-5">
            <h2 style={{ color: '#005eb8', marginBottom: '20px', fontWeight: 'bold' }}>Pregnancy</h2>
            <h5 style={{ fontWeight: 'bold' }}>This guide includes all you need to know about trying for a baby, pregnancy, labour and birth.</h5>

            <div style={{ margin: '50px', fontSize: '20px', backgroundColor: 'white' }}>
                <ul style={{ listStyleType: 'none' }}>
                    <li><a href="#a">Trying for baby</a></li>
                    <li><a href="#a">Finding out you're pregnant</a></li>
                    <li><a href="#a">Your pregnancy care</a></li>
                    <li><a href="#a">Keeping well in pregnancy</a></li>
                    <li><a href="#a">Pregnency week-by-week</a></li>
                    <li><a href="#a">Pregnancy related conditions</a></li>
                    <li><a href="#a">Labour and birth</a></li>
                    <li><a href="#a">Support</a></li>
                </ul>
            </div>
        </Container>
    );
};

export default Pregnancy;