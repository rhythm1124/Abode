import React from 'react';
// import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="leftside">
            <img src={Logo}/>
            </div>
            <div className="rightside">
                <ul>
                    <li>Categories</li>
                    <li>cart</li>
                    <li>search</li>
                    <li>exit</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

// left side: add logo which navigates to home
// Right side: all the navigating link buttons