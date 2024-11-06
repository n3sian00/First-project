import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import ProductForm from './components/ProductForm';
import OrderInfo from './components/OrderInfo';

function App() {
  const [order, setOrder] = useState({ product: {}, quantity: 0 });
  const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
  ];

  const handleOrderChange = (productIndex, quantity) => {
    const selectedProduct = products[productIndex];
    setOrder({ product: selectedProduct, quantity });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Header image={logo} title="Welcome to Our Shop!" />
      <ProductForm products={products} onOrderChange={handleOrderChange} />
      <OrderInfo product={order.product} quantity={order.quantity} />
    </div>
  );
}

export default App;