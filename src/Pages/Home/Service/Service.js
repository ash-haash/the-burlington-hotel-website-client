import './Service.css';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, title, description, img } = service;



    return (
        <Col lg="4" md="6" sm="1">
            <Card className="service" style={{ width: '300px' }}>
                <Card.Img variant="top" style={{ width: '300px', height: '180px' }} src={img} />
                <Card.Body style={{ height: '220px' }}>
                    <Link to={`/service/${_id}`}><Button className="btn btn-dark mb-2">Book Now</Button></Link>
                    <Card.Title style={{ color: 'black', fontWeight: 'bold' }}>{title}</Card.Title>
                    <Card.Text style={{ color: '#212b32', fontWeight: 'lighter' }}>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;