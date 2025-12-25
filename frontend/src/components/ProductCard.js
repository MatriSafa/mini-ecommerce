import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded h-100">
      <Link to={`/product/${product._id}`}>
        <Card.Img 
          src={product.image} 
          variant="top" 
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </Link>
      
      <Card.Body className="d-flex flex-column">
        <Link to={`/product/${product._id}`} className="text-decoration-none">
          <Card.Title as="div" className="text-dark">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        
        <Card.Text as="div" className="my-2">
          <div className="rating">
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
            <span className="ms-2 text-muted">
              ({product.numReviews} avis)
            </span>
          </div>
        </Card.Text>
        
        <Card.Text as="h4" className="mt-auto mb-3 text-primary">
          ${product.price}
        </Card.Text>
        
        <Button 
          variant={product.stock > 0 ? "primary" : "secondary"}
          className="w-100"
          disabled={product.stock === 0}
        >
          {product.stock > 0 ? (
            <>
              <i className="fas fa-shopping-cart me-2"></i>
              Ajouter au panier
            </>
          ) : (
            'Rupture de stock'
          )}
        </Button>
        
        {product.stock < 10 && product.stock > 0 && (
          <small className="text-warning mt-2 d-block">
            <i className="fas fa-exclamation-circle me-1"></i>
            Plus que {product.stock} en stock!
          </small>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;