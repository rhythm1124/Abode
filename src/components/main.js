import React, { useState, useEffect } from 'react';
import lamp from '../assets/lamp12.jpeg';
import './main.css';
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.png';
import './navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        <div className="logo_container">
          <img className="logo" src={Logo} alt="Logo"/>
        </div>
      </div>
      <div className="rightside">
        <ul>
          <li>Our Collection</li>
          <li>Logout</li>
          <li><img className="Cart" src={Cart} alt="Cart"/></li>
        </ul>
      </div>
    </nav>
  );
}

function Main() {
  return (
    <div className="main">
      <Navbar />
      <div className="parallax"></div>
      <div className="main_container">
        <div className="content">
          <h1>Discover Your Perfect Furniture</h1>
          <p>And the journey begins...</p>
        </div>
      </div>

      <div className="main_container">
        <div className="content">
          <h1>Discover Your Perfect Furniture</h1>
          <p>And the journey begins...</p>
        </div>
      </div>

      <div className="parallax"></div>

      <h2>Collection Items</h2>

      <div className="grid-container">
        <div className="container">
          <div className="grid-item">
            <img src={lamp} alt="chairs" className="grid-img" />
            <h2>Chair</h2>
            <p>$200</p>
          </div>
          <div className="grid-item">
            <img src={lamp} alt="tables" className="grid-img" />
            <h2>Table</h2>
            <p>$300</p>
          </div>
          <div className="grid-item">
            <img src={lamp} alt="sofas" className="grid-img" />
            <h2>Sofa</h2>
            <p>$500</p>
          </div>
          <div className="grid-item">
            <img src={lamp} alt="chairs" className="grid-img" />
            <h2>Chair</h2>
            <p>$200</p>
          </div>
          <div className="grid-item">
            <img src={lamp} alt="tables" className="grid-img" />
            <h2>Table</h2>
            <p>$300</p>
          </div>
          <div className="grid-item">
            <img src={lamp} alt="sofas" className="grid-img" />
            <h2>Sofa</h2>
            <p>$500</p>
          </div>
        </div>
      </div>

      <div className="parallax"></div>

      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <a href="#contact">Contact Us</a>
            <a href="#login">Login</a>
            <a href="#signup">Sign Up</a>
            <a href="#home">Home</a>
            <a href="#collection">Collection</a>
          </div>
          <div className="social-links">
            <a href="#facebook"><i className="fab fa-facebook"></i></a>
            <a href="#twitter"><i className="fab fa-twitter"></i></a>
            <a href="#instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Main;
