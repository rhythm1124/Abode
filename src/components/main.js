import React, { useState, useEffect } from 'react';
import lamp from '../assets/lamp5.jpeg';
import shelf from '../assets/sshelf2.jpeg';
import sofa from '../assets/sofa2.1.jpg';
import './main.css';
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.png';
import CartDropdown from './CartDropdown';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function Navbar({ cartItems, handleIncrement, handleDecrement, handleDelete, handleCheckout, handleClearCart }) {
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

  const navigate = useNavigate();

  const toggleCartDropdown = () => {
    setShowCart(!showCart);
  };

  const goToMainPage = () => {
    navigate('/Main');
  };

  const openCollection = () => {
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

function Main() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <div className="main">
      <Navbar
        cartItems={cartItems}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
        handleCheckout={handleCheckout}
        handleClearCart={handleClearCart}
      />
      <div className="parallax"></div>
      <div className="main_container">
        <div className="content">
          <h1>House to Home</h1>
          <p>Our journey began with a simple mission: to craft beautiful, high-quality furniture that blends classic craftsmanship with modern design. With years of experience and a passion for perfection, we have become a trusted name in the world of home furnishings.</p>
          <p>From our skilled artisans to our dedicated customer service team, we strive to deliver an unparalleled shopping experience, from the moment you browse our collections to the final placement of your furniture.</p>
        </div>
      </div>

      <div className="bg-img">
        <div className="info_main">
          <p>
            Discover a curated selection of furniture that embodies both beauty and practicality. Our range includes:
            Elegant sofas, cozy armchairs, and versatile coffee tables designed to be the centerpiece of your home and perfect for hosting and everyday use.
          </p>
        </div>
      </div>

      <div className="about">
        <p>Each piece in our collection is meticulously crafted using the finest materials, ensuring durability and timeless appeal. Whether you are looking to furnish a new home or simply update a room, our products are designed to meet your highest expectations and transform your space into a reflection of your personal style.</p>
      </div>

      <div className="grid-container">
        <div className="container">
          <div className="grid-item">
            <img src={lamp} alt="chairs" className="grid-img" />
            <h2>Lamp</h2>
          </div>
          <div className="grid-item">
            <img src={shelf} alt="tables" className="grid-img" />
            <h2>Cupboard</h2>
          </div>
          <div className="grid-item">
            <img src={sofa} alt="sofas" className="grid-img" />
            <h2>Sofa</h2>
          </div>
        </div>
      </div>

      <div className="parallax3"></div>

      <div className="about">
        <p>Explore our collections today and let us help you create a home that tells your story.</p>
      </div>

      <footer>
        <div className="links">
          <ul>
            <li onClick={collection}>Our Collection</li>
            <li onClick={contact}>Contact Us</li>
            <li onClick={cart}>Cart</li>
            {/* <li onClick={logOut}>Logout</li> */}
            <li onClick={signUp}>SignUp</li>
            <li>Socials</li>
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
}

export default Main;
