import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Alert, Button, Card, ListGroup, Row, Col } from 'react-bootstrap';

const CartPage = () => {
  return (
    <Container>
      <h1 className="my-4">Panier d'achat</h1>
      
      <Alert variant="info">
        <Alert.Heading>
          <i className="fas fa-shopping-cart me-2"></i>
          Panier vide
        </Alert.Heading>
        <p>
          Votre panier est actuellement vide. Ajoutez des produits depuis la page d'accueil.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Link to="/" className="btn btn-primary">
            <i className="fas fa-shopping-bag me-2"></i>
            Voir les produits
          </Link>
        </div>
      </Alert>
      
      <Card className="mt-4">
        <Card.Header>
          <h5 className="mb-0">Résumé de la commande</h5>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col>Sous-total (0 articles)</Col>
              <Col className="text-end">$0.00</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Livraison</Col>
              <Col className="text-end">Gratuite</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <strong>Total</strong>
              </Col>
              <Col className="text-end">
                <strong>$0.00</strong>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button 
              variant="success" 
              className="w-100" 
              disabled
            >
              <i className="fas fa-credit-card me-2"></i>
              Procéder au paiement
            </Button>
            <p className="text-muted small text-center mt-2">
              Ajoutez des produits au panier pour activer le paiement
            </p>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default CartPage;