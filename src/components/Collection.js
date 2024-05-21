import React, { useState } from 'react';
import './Collection.css';
import './navbar.css';
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.png';
import { CollectionList } from './Collection-item-list.js';
import CltItem from './Collection-item.js';
import CartDropdown from './CartDropdown';
import { auth } from '../firebase'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth).then(() => {
      navigate('/login');
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
  }
  return (
    <nav>
      <div className="leftside">
        <div className="logo_container">
          <img className="logo" src={Logo} alt="Logo"/>
        </div>
      </div>
      <div className="rightside">
        <ul>
          <li>Our Collection</li>
          <li onClick={logOut}>Logout</li>
          <li><img className="Cart" src={Cart} alt="Cart"/></li>
        </ul>
      </div>
    </nav>
  );
}

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
      <Navbar/>
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
      {/* <CartDropdown
        cartItems={cartItems}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onCheckout={handleCheckout}
        onClearCart={handleClearCart} // Pass the handleClearCart function
      /> */}
    </div>
  );
};

const showCart = () => {}

export default Collection;
