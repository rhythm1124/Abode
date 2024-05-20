import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, onIncrement, onDecrement, onDelete, onCheckout }) => {
  return (
    <div className="cart-dropdown">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-details">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="tags">
              <button onClick={() => onIncrement(item.id)}>+</button>
              <input type="text" value={item.quantity} readOnly />
              <button onClick={() => onDecrement(item.id)}>-</button>
              <button className="del" onClick={() => onDelete(item.id)}>Del</button>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <button className="checkout-button" onClick={onCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
