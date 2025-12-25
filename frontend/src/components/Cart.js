import React from 'react';

function Cart({ cart, removeFromCart, updateQuantity, total }) {
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <p>Votre panier est vide</p>
        <p>Ajoutez des produits depuis la liste</p>
      </div>
    );
  }

  return (
    <div className="cart">
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-details">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-price">{item.price.toFixed(2)} €</div>
            <div className="cart-item-controls">
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="quantity-btn"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="remove-item-btn"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="cart-total">
        <div className="total-row">
          <span>Sous-total:</span>
          <span>{total.toFixed(2)} €</span>
        </div>
        <div className="total-row">
          <span>Livraison:</span>
          <span>Gratuit</span>
        </div>
        <div className="total-row">
          <span>Total:</span>
          <span>{total.toFixed(2)} €</span>
        </div>
        <button className="checkout-btn">
          Commander
        </button>
      </div>
    </div>
  );
}

export default Cart;