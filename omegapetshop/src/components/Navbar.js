import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">OmegaPetShop</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
        <Nav.Link as={Link} to="/register">Registro</Nav.Link>
        <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavbarComponent;
