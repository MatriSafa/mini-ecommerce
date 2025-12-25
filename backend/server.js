const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const products = [
  {
    _id: "1",
    name: "iPhone 14 Pro",
    description: "Smartphone Apple avec écran Dynamic Island",
    price: 1299.99,
    category: "Smartphones",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=webp&qlt=80&.v=1660753619946",
    stock: 50
  },
  {
    _id: "2",
    name: "MacBook Air M2",
    description: "Ordinateur portable ultra-léger avec puce Apple M2",
    price: 1499.99,
    category: "Ordinateurs",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
    stock: 30
  },
  {
    _id: "3",
    name: "AirPods Pro",
    description: "Écouteurs sans fil avec annulation active du bruit",
    price: 279.99,
    category: "Audio",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361",
    stock: 100
  }
];

app.get('/', (req, res) => {
  res.json({ message: 'API Mini E-commerce fonctionne!' });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`🚀 Backend: http://localhost:${PORT}`);
  console.log(`📡 API: http://localhost:${PORT}/api/products`);
});