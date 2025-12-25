import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Spinner, Alert } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data.data || []);
        setLoading(false);
      } catch (err) {
        console.error('Erreur:', err);
        setError('Impossible de charger les produits. Vérifiez que le serveur backend est démarré (port 5000).');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <h1 className="my-4">Nos Produits</h1>
      
      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Chargement...</span>
          </Spinner>
          <p className="mt-2">Chargement des produits...</p>
        </div>
      ) : error ? (
        <Alert variant="danger">
          <Alert.Heading>Erreur de connexion</Alert.Heading>
          <p>{error}</p>
          <hr />
          <p className="mb-0">
            Assurez-vous que:
            <ul>
              <li>Le backend est démarré (npm run dev dans le dossier backend)</li>
              <li>MongoDB est en cours d'exécution</li>
            </ul>
          </p>
        </Alert>
      ) : products.length === 0 ? (
        <Alert variant="info">
          Aucun produit disponible pour le moment.
        </Alert>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default HomePage;