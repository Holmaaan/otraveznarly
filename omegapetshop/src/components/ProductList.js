import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Datos de ejemplo para los productos
const products = [
  {
    id: 1,
    name: 'Comida para Perro A',
    description: 'Nutrición completa para perros.',
    price: '$20.00',
    image: 'https://via.placeholder.com/150?text=Comida+1',
  },
  {
    id: 2,
    name: 'Comida para Perro B',
    description: 'Ideal para perros activos.',
    price: '$25.00',
    image: 'https://via.placeholder.com/150?text=Comida+2',
  },
  {
    id: 3,
    name: 'Comida para Perro C',
    description: 'Alta proteína para perros grandes.',
    price: '$30.00',
    image: 'https://via.placeholder.com/150?text=Comida+3',
  },
  {
    id: 4,
    name: 'Comida para Perro D',
    description: 'Para perros con sensibilidad estomacal.',
    price: '$22.00',
    image: 'https://via.placeholder.com/150?text=Comida+4',
  },
  // Agrega más productos según sea necesario
];

function ProductList() {
  return (
    <div className="container mt-4">
      <h2>Productos de Comida para Perro</h2>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text><strong>{product.price}</strong></Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductList;
