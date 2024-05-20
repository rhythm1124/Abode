import React from 'react';
// import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.png';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="leftside">
            <div className="logo_container">
                <img className="logo" src={Logo} alt="Logo"/>
            </div>
            </div>
            <div className="rightside">
                <ul>
                    <li>Categories</li>
                    <li><img className="Cart" src={Cart} alt="Cart"/></li>
                </ul>
            </div>
        </div>
    );
}

// {/* <div className="search-container">
//                     <li><input type="text" placeholder="Search" className="Search-bar" /></li>
//                     </div>  */}

export default Navbar;

// left side: add logo which navigates to home
// Right side: all the navigating link buttons