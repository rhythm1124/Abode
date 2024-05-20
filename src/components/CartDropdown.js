import React from 'react';
import './CartDropdown.css';

const CartDropdown = ({ cartItems, onIncrement, onDecrement, onDelete, onCheckout, onClearCart }) => {

  const handleCheckout = () => {
    // Call the onCheckout function to perform checkout related actions
    onCheckout();
    // Call the onClearCart function to clear the cart
    onClearCart();
  };

  return (
    <div className="cart-dropdown">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.img_title} className="product-image" />
            <div className="product-details">
              <h4>{item.img_title}</h4>
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
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
};

export default CartDropdown;
