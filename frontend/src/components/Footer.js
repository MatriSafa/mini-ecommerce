import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-3">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>
              <i className="fas fa-store me-2"></i>
              Mini E-commerce &copy; {new Date().getFullYear()}
            </p>
            <p className="text-muted small">
              Projet MERN pour débutants - Tous droits réservés
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;