const mongoose = require('mongoose');
const Product = require('./models/Product');

const sampleProducts = [
  {
    name: "iPhone 14 Pro",
    description: "Smartphone Apple avec écran Dynamic Island et caméra 48MP",
    price: 1299.99,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1678652173919-1d5bdd0d850d?w=400&h=400&fit=crop",
    stock: 50
  },
  {
    name: "MacBook Air M2",
    description: "Ordinateur portable ultra-léger avec puce Apple M2",
    price: 1499.99,
    category: "Ordinateurs",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    stock: 30
  },
  {
    name: "AirPods Pro",
    description: "Écouteurs sans fil avec annulation active du bruit",
    price: 279.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w-400&h=400&fit=crop",
    stock: 100
  },
  {
    name: "iPad Air",
    description: "Tablette polyvalente avec écran Liquid Retina",
    price: 749.99,
    category: "Tablettes",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    stock: 40
  },
  {
    name: "Apple Watch Series 8",
    description: "Montre connectée avec capteur de température",
    price: 499.99,
    category: "Montres",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
    stock: 60
  },
  {
    name: "Samsung Galaxy S23",
    description: "Smartphone Android avec appareil photo 200MP",
    price: 899.99,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    stock: 45
  },
  {
    name: "PlayStation 5",
    description: "Console de jeux next-gen",
    price: 549.99,
    category: "Jeux vidéo",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
    stock: 25
  },
  {
    name: "Casque Bose QC45",
    description: "Casque avec réduction de bruit active",
    price: 329.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    stock: 75
  }
];

async function seedDatabase() {
  try {
    console.log('🌱 Connexion à MongoDB...');
    
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ Connecté à MongoDB');
    
    // Supprimer les anciens produits
    await Product.deleteMany({});
    console.log('🗑️  Anciens produits supprimés');
    
    // Ajouter les nouveaux produits
    await Product.insertMany(sampleProducts);
    console.log(`✅ ${sampleProducts.length} produits ajoutés avec succès!`);
    
    // Afficher les produits
    const products = await Product.find();
    console.log('\n📋 Produits dans la base:');
    products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - ${product.price}€ (Stock: ${product.stock})`);
    });
    
    // Fermer la connexion
    await mongoose.connection.close();
    console.log('\n🔌 Connexion à MongoDB fermée');
    console.log('✨ Base de données prête !');
    
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    console.log('💡 Vérifiez que MongoDB est démarré (mongod)');
    process.exit(1);
  }
}

seedDatabase();