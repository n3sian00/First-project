// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import OrderInfo from './components/OrderInfo';

const App = () => {
  const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
  ];

  const [order, setOrder] = useState({ product: products[0], quantity: 1 });

  const handleOrderChange = (productIndex, quantity) => {
    setOrder({ product: products[productIndex], quantity });
  };

  return (
    <div>
      <Header image="https://example.com/header.png" title="Welcome to product page!" />
      <ProductForm products={products} onOrderChange={handleOrderChange} />
      <OrderInfo product={order.product} quantity={order.quantity} />
    </div>
  );
};

export default App;
