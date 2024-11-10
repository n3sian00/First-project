import React from 'react';

const OrderInfo = ({ product, quantity }) => {
  const totalPrice = product.price * quantity;

  return (
    <div>
      <h3>Order Information</h3>
      <p>Product: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default OrderInfo;
