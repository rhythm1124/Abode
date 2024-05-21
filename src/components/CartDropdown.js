import React, { useState, useEffect } from 'react';
import './CartDropdown.css';

const CartDropdown = ({ cartItems, onIncrement, onDecrement, onDelete, onCheckout, onClearCart }) => {
  const [newItem, setNewItem] = useState(null);

  useEffect(() => {
    if (cartItems.length > 0) {
      setNewItem(cartItems[cartItems.length - 1]);
    }
  }, [cartItems]);

  const handleCheckout = () => {
    onCheckout();
    onClearCart();
  };

  return (
    <div className="cart-dropdown">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {newItem && (
            <div className="new-item">
              <h3>New Item</h3>
              <div className="cart-item">
                <img src={newItem.img} alt={newItem.img_title} className="product-image" />
                <div className="product-details">
                  <h4>{newItem.img_title}</h4>
                  <p>₹{newItem.price.toFixed(2)}</p>
                </div>
                <div className="tags">
                  <button onClick={() => onIncrement(newItem.id)}>+</button>
                  <input type="text" value={newItem.quantity} readOnly />
                  <button onClick={() => onDecrement(newItem.id)}>-</button>
                  <button className="del" onClick={() => onDelete(newItem.id)}>Del</button>
                </div>
              </div>
            </div>
          )}
          <h3>All Items</h3>
          {cartItems.slice(0, -1).map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.img_title} className="product-image" />
              <div className="product-details">
                <h4>{item.img_title}</h4>
                <p>₹{item.price.toFixed(2)}</p>
              </div>
              <div className="tags">
                <button onClick={() => onIncrement(item.id)}>+</button>
                <input type="text" value={item.quantity} readOnly />
                <button onClick={() => onDecrement(item.id)}>-</button>
                <button className="del" onClick={() => onDelete(item.id)}>Del</button>
              </div>
            </div>
          ))}
        </>
      )}
      {cartItems.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
};

export default CartDropdown;
