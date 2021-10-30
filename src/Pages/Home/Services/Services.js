import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://obscure-shore-16166.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Container id="services">
            <h2 style={{ color: 'black', marginTop: '30px', fontWeight: 'bold' }}>Our Services</h2>
            <Row className="g-5 py-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)

                }
            </Row>
        </Container>
    );
};

export default Services;