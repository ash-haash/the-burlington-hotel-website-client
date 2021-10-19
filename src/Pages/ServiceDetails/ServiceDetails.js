import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = ({ service }) => {
    const { serviceId } = useParams();
    return (
        <Container className="p-5 mt-3">
            <h1>This is service details: {serviceId}</h1>



        </Container>
    );
};

export default ServiceDetails;