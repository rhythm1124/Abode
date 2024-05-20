import React from "react";
import './welcomepage.css';
import backgroundImage from './bg image.jpg'

const WelcomePage=()=>{
    return(
        <div className="outer">
        <div className='wel'>
      <div className='web'>
        <h1>Welcome to Our Website</h1>
        <p>
        "Welcome to "BookShelf", your gateway to a world of stories, knowledge, and imagination.
        Dive into our vast collection of books spanning genres from classics to contemporary bestsellers, and embark on an enriching journey with every turn of the page."
        </p>
        <button className='bttn' >Login</button>
        {/* onClick={handleLoginCLick} */}
      </div>
    </div>
    </div>
    );
};
export default WelcomePage;