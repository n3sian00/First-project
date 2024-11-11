import React from 'react';

const OrderInfo = ({ product, quantity }) => {
    const totalPrice = (product.price * quantity).toFixed(2);

    return (
        <div style={{ padding: '20px', textAlign: 'center', borderTop: '1px solid #ddd' }}>
            <h3>Order Information</h3>
            <p>Product: {product.name}</p>
            <p>Price per unit: ${product.price}</p>
            <p>Quantity: {quantity}</p>
            <p><strong>Total Price: ${totalPrice}</strong></p>
        </div>
    );
};

export default OrderInfo;
