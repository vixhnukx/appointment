import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import './DoctorCard.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
function DoctorCard({data}) {
  return (
    
    
    <Col className='p-3' sm={12} md={6} lg={4} xl={3}>
        
        <Container>
    <Card className='mt-4 text-center' style={{ width: '100%' }}>
      <Card.Img variant="top" src={data.photograph} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.category}
        </Card.Text>
        <Link to={`/view-doctor/${data.id}`}>
        <Button className='bttn' variant="dark">schedule</Button>
        </Link>
      </Card.Body>
    </Card>
    </Container>
    </Col>
  )
}

export default DoctorCard