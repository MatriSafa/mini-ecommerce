// backend/data.js
// backend/data.js
const products = [
  {
    _id: "1",
    name: "iPhone 13",
    description: "Smartphone Apple avec écran Super Retina XDR",
    price: 899,
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-blue-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572386472",
    category: "Électronique",
    stock: 50,
    rating: 4.5,
    numReviews: 120,
    createdAt: new Date()
  },
  {
    _id: "2",
    name: "Ordinateur Portable Dell",
    description: "PC portable 15 pouces, 16GB RAM, 512GB SSD",
    price: 999,
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3520/media-gallery/notebook-inspiron-15-3520-black-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3500&hei=1974&qlt=100,1&resMode=sharp2&size=3500,1974",
    category: "Électronique",
    stock: 25,
    rating: 4.2,
    numReviews: 89,
    createdAt: new Date()
  },
  {
    _id: "3",
    name: "T-shirt Nike",
    description: "T-shirt en coton 100%",
    price: 29,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-max-270-shoes-6BnM30.png",
    category: "Vêtements",
    stock: 100,
    rating: 4.0,
    numReviews: 45,
    createdAt: new Date()
  },
  {
    _id: "4",
    name: "Livre React pour Débutants",
    description: "Apprenez React étape par étape",
    price: 35,
    image: "https://m.media-amazon.com/images/I/51F5k-+Dq3L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Livres",
    stock: 30,
    rating: 4.8,
    numReviews: 67,
    createdAt: new Date()
  }
];

module.exports = products;