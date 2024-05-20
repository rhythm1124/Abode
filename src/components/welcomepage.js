import React from "react";
import './welcomepage.css';

const WelcomePage=()=>{
    return(
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
      {/* <div className='image'>
        <img src={backgroundImage} alt="Welcome" className='image'/>
        
      </div> */}
      {/* <button className='bttn'>Login</button> */}
    </div>
    );
};
export default WelcomePage;