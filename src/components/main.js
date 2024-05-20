import React from 'react';
// import {Link} from 'react-router-dom';
import lamp from '../assets/lamp12.jpeg'
import './main.css';

function Main () {
    return (
        <div className="main">
            <div className="main_container">
                    <div className="content">
                        <h1>title</h1>
                        <p>and the journey begins</p>
                    </div>
            </div>

            <div classname="grid-containter">
                <div className="container">
                    <div className="grid-item">
                        <img src={lamp} alt="chairs" className="grid-img" />
                        <h2>chair</h2>
                        <p>200</p>
                    </div>
                </div>
                <div className="container">
                    <div className="grid-item">
                        <img src={lamp} alt="chairs" className="grid-img" />
                        <h2>chair</h2>
                        <p>200</p>
                    </div>
                </div>
                <div className="container">
                    <div className="grid-item">
                        <img src={lamp} alt="chairs" className="grid-img" />
                        <h2>chair</h2>
                        <p>200</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main;