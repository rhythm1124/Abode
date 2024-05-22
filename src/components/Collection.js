import React, { useState } from 'react';
import './Collection.css';
import './navbar.css';
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.png';
import { CollectionList } from './Collection-item-list.js';
import CltItem from './Collection-item.js';
import CartDropdown from './CartDropdown';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Navbar({ cartItems, handleIncrement, handleDecrement, handleDelete, handleCheckout, handleClearCart }) {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);

  const logOut = () => {
    signOut(auth).then(() => {
      navigate('/login');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };

  const toggleCartDropdown = () => {
    setShowCart(!showCart);
  };

  const goToMainPage = () => {
    navigate('/Main');
  };

  const openCollection = () => {
    navigate('/Collection');
  };

  const contact = () => {
    navigate('/ContactUs');
  };

  const cart = () => {
    navigate('/Cart');
  };

  const signUp = () => {
    navigate('/SignUp');
  };

  return (
    <nav>
      <div className="leftside">
        <div className="logo_container" onClick={goToMainPage}>
          <img className="logo" src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="rightside">
        <ul>
          <li onClick={openCollection}>Our Collection</li>
          <li onClick={logOut}>Logout</li>
          <li>
            <img className="Cart" src={Cart} alt="Cart" onClick={toggleCartDropdown} />
            {showCart && (
              <CartDropdown
                cartItems={cartItems}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
                onCheckout={handleCheckout}
                onClearCart={handleClearCart}
              />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

const Collection = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

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

  const collection = () => {
    navigate('/Collection');
  };

  const contact = () => {
    navigate('/ContactUs');
  };

  const cart = () => {
    navigate('/Cart');
  };

  const signUp = () => {
    navigate('/SignUp');
  };

  const logOut = () => {
    signOut(auth).then(() => {
      navigate('/login');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };

  return (
    <div className="collection-container">
      <Navbar
        cartItems={cartItems}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
        handleCheckout={handleCheckout}
        handleClearCart={handleClearCart}
      />
      <div className="collection-grid-container">
        <div className="collection-item">
          {CollectionList.map((item, key) => (
            <CltItem
              key={item.id}
              img={item.img}
              img_title={item.img_title}
              price={item.price}
              addToCart={() => addToCart(item)} // Pass the addToCart function
            />
          ))}
        </div>
      </div>
      <footer>
        <div className="links">
          <ul>
            <li onClick={collection}>Our Collection</li>
            <li onClick={contact}>Contact Us</li>
            <li onClick={cart}>Cart</li>
            <li onClick={logOut}>Logout</li>
          </ul>
        </div>

        <div className="endings">
          <ul>
            <li>All copyrights reserved</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Collection;
