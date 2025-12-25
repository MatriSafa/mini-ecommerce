import React from 'react';

function ProductItem({ product, addToCart }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-meta">
          <span className="product-price">{product.price.toFixed(2)} €</span>
          <span className={`product-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
            {product.stock > 0 ? `En stock (${product.stock})` : 'Rupture'}
          </span>
        </div>
        <button 
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          className="add-to-cart-btn"
        >
          {product.stock > 0 ? 'Ajouter au panier' : 'Indisponible'}
        </button>
      </div>
    </div>
  );
}

export default ProductItem;