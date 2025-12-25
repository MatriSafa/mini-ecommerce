import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Container, Alert, Card } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulation de connexion
      console.log('Tentative de connexion:', { email, password });
      
      setTimeout(() => {
        setLoading(false);
        alert('Connexion réussie (simulation)!\n\nEmail: ' + email + '\nMot de passe: ' + password);
        navigate('/');
      }, 1000);
      
    } catch (err) {
      setError('Erreur de connexion. Vérifiez vos identifiants.');
      setLoading(false);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} lg={5}>
          <Card className="shadow">
            <Card.Body>
              <h1 className="text-center mb-4">
                <i className="fas fa-user-circle text-primary me-2"></i>
                Connexion
              </h1>
              
              {error && <Alert variant="danger">{error}</Alert>}
              
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Adresse email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Entrez votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-4">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-100 py-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Connexion en cours...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-sign-in-alt me-2"></i>
                      Se connecter
                    </>
                  )}
                </Button>
              </Form>

              <Row className="py-3">
                <Col className="text-center">
                  <p className="text-muted mb-2">Nouveau client?</p>
                  <Link to="/register" className="btn btn-outline-primary">
                    Créer un compte
                  </Link>
                </Col>
              </Row>
              
              <div className="text-center mt-4">
                <small className="text-muted">
                  <i className="fas fa-info-circle me-1"></i>
                  Pour le moment, l'authentification est simulée. 
                  Toute combinaison email/mot de passe fonctionnera.
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;