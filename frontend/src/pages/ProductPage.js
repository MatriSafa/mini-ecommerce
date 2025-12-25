import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Row, 
  Col, 
  Image, 
  ListGroup, 
  Card, 
  Button,
  Form,
  Container,
  Spinner,
  Alert 
} from 'react-bootstrap';
import axios from 'axios';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Erreur:', err);
        setError('Produit non trouvé ou erreur de connexion.');
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const addToCartHandler = () => {
    alert(`Ajouté au panier: ${quantity} x ${product.name} - $${product.price * quantity}`);
  };

  return (
    <Container>
      <Link to="/" className="btn btn-light my-3">
        <i className="fas fa-arrow-left me-2"></i>
        Retour à l'accueil
      </Link>
      
      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Chargement...</span>
          </Spinner>
          <p className="mt-2">Chargement du produit...</p>
        </div>
      ) : error ? (
        <Alert variant="danger">
          <h4>Erreur</h4>
          <p>{error}</p>
          <Link to="/" className="btn btn-primary mt-2">
            Retour à l'accueil
          </Link>
        </Alert>
      ) : product ? (
        <Row>
          <Col md={6}>
            <Image 
              src={product.image} 
              alt={product.name} 
              fluid 
              className="rounded shadow"
              style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
            />
          </Col>
          
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <div className="rating mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i}
                      className={
                        product.rating > i 
                          ? 'fas fa-star text-warning' 
                          : product.rating > i - 0.5 
                          ? 'fas fa-star-half-alt text-warning' 
                          : 'far fa-star text-warning'
                      }
                    ></i>
                  ))}
                  <span className="ms-2">
                    {product.rating} / 5 ({product.numReviews} avis)
                  </span>
                </div>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <strong>Prix:</strong> <span className="text-primary h4">${product.price}</span>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <strong>Catégorie:</strong> {product.category}
              </ListGroup.Item>
              
              <ListGroup.Item>
                <strong>Description:</strong>
                <p className="mt-2">{product.description}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          
          <Col md={3}>
            <Card className="shadow">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Prix:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                
                <ListGroup.Item>
                  <Row>
                    <Col>Statut:</Col>
                    <Col>
                      {product.stock > 0 ? (
                        <span className="text-success">
                          <i className="fas fa-check-circle me-1"></i>
                          En stock
                        </span>
                      ) : (
                        <span className="text-danger">
                          <i className="fas fa-times-circle me-1"></i>
                          Rupture de stock
                        </span>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                
                {product.stock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantité:</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                        >
                          {[...Array(Math.min(product.stock, 10)).keys()].map(x => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                
                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className="w-100 py-2"
                    variant={product.stock > 0 ? "primary" : "secondary"}
                    disabled={product.stock === 0}
                  >
                    {product.stock > 0 ? (
                      <>
                        <i className="fas fa-cart-plus me-2"></i>
                        Ajouter au panier (${product.price * quantity})
                      </>
                    ) : (
                      'Rupture de stock'
                    )}
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};

export default ProductPage;