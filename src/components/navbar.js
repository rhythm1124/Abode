import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="leftside">
            <Link to="/"><img src={Logo}/></Link>
            </div>
            <div className="rightside"></div>
        </div>
    );
}

export default Navbar;

// left side: add logo which navigates to home
// Right side: all the navigating link buttons