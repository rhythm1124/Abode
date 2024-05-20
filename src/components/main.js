import React from 'react';
import lamp from '../assets/lamp12.jpeg';
import './main.css';

function Main() {
  return (
    <div className="main">
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
