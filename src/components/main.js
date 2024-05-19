import React from 'react';
// import {Link} from 'react-router-dom';
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
                <div className="grid-item">
                    <img src="lamp14.jpeg" alt="chairs" className="item1" />
                </div>
                <div className="grid-item">1</div>
                <div className="grid-item">1</div>
            </div>

        </div>
    )
}

export default Main;