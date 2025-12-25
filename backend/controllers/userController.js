// backend/controllers/userController.js

// Données utilisateurs simulées
let users = [];

// Inscription
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Vérifier si l'utilisateur existe déjà
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'Email déjà utilisé'
      });
    }
    
    // Créer l'utilisateur
    const user = {
      _id: Date.now().toString(),
      name,
      email,
      password,
      isAdmin: false,
      createdAt: new Date()
    };
    
    users.push(user);
    
    res.status(201).json({
      success: true,
      message: 'Inscription réussie',
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
      }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Connexion
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Trouver l'utilisateur
    const user = users.find(user => user.email === email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Email ou mot de passe incorrect'
      });
    }
    
    // Vérifier le mot de passe
    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: 'Email ou mot de passe incorrect'
      });
    }
    
    res.json({
      success: true,
      message: 'Connexion réussie',
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
      }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};