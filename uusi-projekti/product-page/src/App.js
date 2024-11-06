// src/App.js
import React, { useState } from 'react';
import header from './components/header';
import productform from './components/productform';
import orderinfo from './components/orderinfo';
import cocktail from './components/cocktail';
import './App.css';

function App() {
  const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);

  const handleProductSelect = (productIndex, qty) => {
    setSelectedProduct(products[productIndex]);
    setQuantity(qty);
  };

  return (
    <div className="App">
      <header image="/logo192.png" title="Product Store" />
      <productform products={products} onProductSelect={handleProductSelect} />
      <orderinfo product={selectedProduct} quantity={quantity} />
      <cocktail /> {/* Uusi Cocktail-komponentti */}
    </div>
  );
}

export default App;
