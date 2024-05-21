import React, { useState, useEffect } from 'react';
import lamp from '../assets/lamp5.jpeg';
import shelf from '../assets/sshelf2.jpeg';
import sofa from '../assets/sofa2.1.jpg';
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

      <div className="bg-img">
      <div className="info">
        <p>
            this is some random text to just testthis is some random text to just testthis is some random text to just testthis is some random text to just testthis is some random text to just testthis is some random text to just testthis is some random text to just testthis is some random text to just testthis is some random text to just testthis is some random text to just testthis is some random text to just testthis is some random text to just test
        </p>
        </div>
      </div>
      
      <div className="about">
        <p>About content About contentAbout contentAbout contentAbout contentAbout content About content About content About content</p>
        <p>About content About contentAbout contentAbout contentAbout contentAbout content About content About content About content</p>
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
        <p>About content About contentAbout contentAbout contentAbout contentAbout content About content About content About content</p>
      </div>

      <footer>
        <div className="links">
          <ul>
            <li>Collection</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li>Logout</li>
            <li>SignUp</li>
            <li>Socials</li>
          </ul>
        <div/>
          
        <div className="endings">
          <ul>
            <li>Made from Scratch</li>
            <li>All copyrights reserved</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

      
        </div>
      </footer>
    </div>
  );
}

export default Main;
