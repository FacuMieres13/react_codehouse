// Cart.js

import React from 'react';
import { useCart } from '../../components/context/CartContext';
import './Cart.css'; 

const Cart = () => {
  const { cartItems } = useCart();

  const calculateItemTotal = (item) => {
    return (item.totalPrice || 0).toFixed(2);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.totalPrice || 0;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li className="cart-item" key={index}>
            <img className="item-image" src={item.thumbnail} alt={item.title} />
            <div className="item-details">
              <h3 className="item-title">{item.title}</h3>
              <p className="item-description">{item.short_description}</p>
              <p className="item-price">${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Total: ${calculateItemTotal(item)}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h3>Total:</h3>
        <p>${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default Cart;
