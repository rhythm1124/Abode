import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartDropdown from './CartDropdown';
import './navbar.css';
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.png';

function Navbar({ cartItem, handleIncrement, handleDecrement, handleDelete, handleClearCart}) {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
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
                        { showCart &&(
                            <CartDropdown
                            cartItems={cartItem}
                            onIncrement={handleIncrement}
                            onDecremetn={handleDecrement}
                            onDelete={handleDelete}
                            onCheckout={handleCheckout}
                            onClearCart={hanleClearCart}
                            />
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

function Main() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    
    const handleIncrement = (id) => {
      setCartItems(cartitems.map(cartItem =>
        cartItem.id === id ? { ...cartItem, quatity: cartItem.quantity + 1 } : cartItem
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
  
    const contact = () => {
      navigate('/ContactUs');
    };
  
    const cart = () => {
      navigate('/Cart');
    };
  
    const signUp = () => {
      navigate('/SignUp');
    };
  
    const collection = () => {
      navigate('/Collection');
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
      <Navbar
        cartItems={cartItems}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
        handleCheckout={handleCheckout}
        handleClearCart={handleClearCart}
      />
    )
}