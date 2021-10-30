import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const DeleteServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }

    return (
        <Container className="p-5 mt-5">
            <h2>Delete Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.title}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </Container>
    );
};

export default DeleteServices;