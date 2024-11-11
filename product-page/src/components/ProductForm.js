import React, { useState } from 'react';

const ProductForm = ({ products, onOrderChange }) => {
    const [selectedProductIndex, setSelectedProductIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const handleProductChange = (event) => {
        const index = parseInt(event.target.value);
        setSelectedProductIndex(index);
        onOrderChange(products[index], quantity);
    };

    const handleQuantityChange = (increment) => {
        const newQuantity = Math.max(0, quantity + increment);
        setQuantity(newQuantity);
        onOrderChange(products[selectedProductIndex], newQuantity);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <label htmlFor="product">Product: </label>
            <select id="product" value={selectedProductIndex} onChange={handleProductChange}>
                {products.map((product, index) => (
                    <option key={index} value={index}>
                        {product.name}
                    </option>
                ))}
            </select>
            <div style={{ marginTop: '10px' }}>
                <button onClick={() => handleQuantityChange(-1)}>-</button>
                <span style={{ margin: '0 10px' }}>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
        </div>
    );
};

export default ProductForm;
