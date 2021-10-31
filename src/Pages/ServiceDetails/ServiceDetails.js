import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://obscure-shore-16166.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <Container className="p-5 mt-5">
            <h2>{service.title}</h2>
            <img style={{ width: '500px', margin: '30px 0px' }} src={service.img} alt="" />
            <p>{service.description}</p>


        </Container>
    );
};

export default ServiceDetails;