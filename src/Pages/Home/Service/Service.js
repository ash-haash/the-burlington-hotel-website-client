import './Service.css';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, title, description, img } = service;



    return (
        <Col lg="4" md="6" sm="1">
            <Card className="service" style={{ width: '300px' }}>
                <Card.Img variant="top" style={{ width: '300px', height: '180px' }} src={img} />
                <Card.Body style={{ height: '180px' }}>
                    <Link to={`/service/${id}`}><Card.Title style={{ color: '#005eb8', fontWeight: 'bold' }}>{title}</Card.Title></Link>
                    <Card.Text style={{ color: '#212b32', fontWeight: 'lighter' }}>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;