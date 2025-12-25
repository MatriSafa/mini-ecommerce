import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/products');
      
      if (!response.ok) {
        throw new Error('Impossible de charger les produits');
      }
      
      const data = await response.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    if (product.stock === 0) {
      alert('Ce produit est en rupture de stock');
      return;
    }

    const existingItem = cart.find(item => item.id === product._id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    if (window.confirm('Vider tout le panier?')) {
      setCart([]);
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Chargement des produits...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        <h2>⚠️ Erreur de connexion</h2>
        <p>{error}</p>
        <button onClick={fetchProducts} className="retry-btn">
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Header cartCount={getCartCount()} />
      
      <main className="main-container">
        <div className="products-section">
          <h2>🎁 Nos Produits</h2>
          <ProductList products={products} addToCart={addToCart} />
        </div>
        
        <div className="cart-section">
          <div className="cart-header">
            <h2>🛒 Votre Panier</h2>
            {cart.length > 0 && (
              <button onClick={clearCart} className="clear-cart-btn">
                Vider le panier
              </button>
            )}
          </div>
          <Cart 
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            total={getTotal()}
          />
        </div>
      </main>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Mini E-commerce. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;