import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceDetails from '../../ServiceDetails/ServiceDetails';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Container id="services">
            <h2 style={{ color: '#005eb8', marginTop: '30px', fontWeight: 'bold' }}>NHS Services</h2>
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







// const services = [
//     {
//         id: 1,
//         title: 'Book a coronavirus vaccination if you are eligible',
//         description: 'Use this service to book a coronavirus (COVID-19) vaccination or manage your appointments',
//         img: 'https://ibb.co/0ZBHCWp'
//     },
//     {
//         id: 2,
//         title: 'Get tested for coronavirus',
//         description: 'There are different tests you can get to check if you have coronavirus (COVID-19). The test you need depends on why you are getting tested.',
//         img: 'https://ibb.co/C99k2kr'
//     },
//     {
//         id: 3,
//         title: 'The NHS website repeat prescription ordering service',
//         description: 'Order Your Repeat Prescription From Anywhere At Any Time And We will Take Care Of The Rest',
//         img: 'https://ibb.co/7XTQmC8'
//     },
//     {
//         id: 4,
//         title: 'Find services near you',
//         description: 'Find your nearest NHS services, including pharmacies, GPs, and A&E',
//         img: 'https://ibb.co/52bn4zH'
//     },
//     {
//         id: 5,
//         title: 'Prescriptions and pharmacies',
//         description: 'Order repeat prescriptions, find out about prescription charges and how pharmacists can help you with medicines and medical advice.',
//         img: 'https://ibb.co/Zhr6d42'
//     },
//     {
//         id: 6,
//         title: 'Mental health services',
//         description: 'Information about NHS mental health services, including how to access services and where to get urgent help',
//         img: 'https://ibb.co/zP8qcJx'
//     }
// ]