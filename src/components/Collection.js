import React, { useState } from 'react';
import './Collection.css';
import { CollectionList } from './Collection-item-list.js';
import CltItem from './Collection-item.js';
import CartDropdown from './CartDropdown';

const Collection = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleIncrement = (id) => {
    setCartItems(cartItems.map(cartItem =>
      cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    ));
  };

  const handleDecrement = (id) => {
    setCartItems(cartItems.map(cartItem =>
      cartItem.id === id && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    ));
  };

  const handleDelete = (id) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== id));
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout');
  };

  const handleClearCart = () => {
    setCartItems([]); // Clear the cart by setting cartItems to an empty array
  };

  return (
    <div className="collection-container">
      <div className="content-container">
        <h1>title</h1>
        <p>summary types</p>
      </div>
      <div className="collection-grid-container">
        <div className="collection-item">
          {CollectionList.map((item, key) => {
            return (
              <CltItem
                key={item.id}
                img={item.img}
                img_title={item.img_title}
                price={item.price}
                addToCart={() => addToCart(item)} // Pass the addToCart function
              />
            );
          })}
        </div>
      </div>
      <CartDropdown
        cartItems={cartItems}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onCheckout={handleCheckout}
        onClearCart={handleClearCart} // Pass the handleClearCart function
      />
    </div>
  );
};

export default Collection;
