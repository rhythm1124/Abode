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
    
}