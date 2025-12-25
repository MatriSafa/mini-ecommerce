// backend/controllers/productController.js
const products = require('../data');

// GET tous les produits
exports.getProducts = async (req, res) => {
  try {
    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// GET produit par ID
exports.getProductById = async (req, res) => {
  try {
    const product = products.find(p => p._id === req.params.id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouvé'
      });
    }
    
    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// POST créer un produit (simulé)
exports.createProduct = async (req, res) => {
  try {
    const newProduct = {
      _id: Date.now().toString(),
      ...req.body,
      createdAt: new Date()
    };
    
    products.push(newProduct);
    
    res.status(201).json({
      success: true,
      data: newProduct
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// PUT mettre à jour un produit (simulé)
exports.updateProduct = async (req, res) => {
  try {
    const index = products.findIndex(p => p._id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouvé'
      });
    }
    
    // Mettre à jour le produit
    products[index] = { ...products[index], ...req.body, _id: req.params.id };
    
    res.json({
      success: true,
      data: products[index]
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// DELETE supprimer un produit (simulé)
exports.deleteProduct = async (req, res) => {
  try {
    const index = products.findIndex(p => p._id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouvé'
      });
    }
    
    // Supprimer le produit
    const deletedProduct = products.splice(index, 1)[0];
    
    res.json({
      success: true,
      message: 'Produit supprimé',
      data: deletedProduct
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};