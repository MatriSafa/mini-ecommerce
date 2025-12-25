import React from 'react';

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>🛒 Mini E-commerce</h1>
      </div>
      <div className="cart-icon">
        <span>Panier</span>
        <div className="cart-count">{cartCount}</div>
      </div>
    </header>
  );
}

export default Header;