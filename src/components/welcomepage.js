import React from "react";
import './welcomepage.css';
import backgroundImage from './bg image.jpg'
import {useNavigate} from 'react-router-dom';



const WelcomePage=()=>{
  const navigate = useNavigate();
  const handleLoginCLick = () => {
    navigate('/login')
  }
  return(
        <div className="outer">
        <div className='wel'>
      <div className='web'>
        <h1>Welcome to Our Website</h1>
        <p>
        Welcome to Abode, where your dream home comes to life. Dive into our thoughtfully curated collection of stylish and high-quality furnishings, and let us help you transform every room into a haven of comfort, beauty, and personal expression. Discover the perfect pieces that resonate with your unique style and create a home you love.
        </p>
        <button className='bttn' onClick={handleLoginCLick}>Login</button>
      </div>
    </div>
    </div>
    );
};
export default WelcomePage;