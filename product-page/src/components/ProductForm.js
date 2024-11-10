// src/components/ProductForm.js
import React, { useState } from 'react';

const ProductForm = ({ products, onOrderChange }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (e) => {
    setSelectedProductIndex(e.target.value);
    onOrderChange(e.target.value, quantity);
  };

  const handleQuantityChange = (delta) => {
    const newQuantity = Math.max(0, quantity + delta);
    setQuantity(newQuantity);
    onOrderChange(selectedProductIndex, newQuantity);
  };

  return (
    <div>
      <select onChange={handleProductChange} value={selectedProductIndex}>
        {products.map((product, index) => (
          <option key={index} value={index}>{product.name}</option>
        ))}
      </select>
      <div>
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
    </div>
  );
};

export default ProductForm;
