import React from 'react';
import './Collection.css';
import lamp from '../assets/lamp12.jpeg'

const Collection = () => {
    return(
        <div className="collection-container">
            <div className="content-container">
                <h1>title</h1>
                <p>summary types</p>
            </div>
            <div className="collection-grid-container">
                <div className="collection-item">
                    <img src={lamp} alt="lamp" className="collection-item-img"/>
                    <h2>title</h2>
                    <p>know more</p>
                    <button className="item-increment">+</button>
                    <input type="text" className="output-display"></input>
                    <button className="item-decrement">-</button>
                    <button className="item-delete">Del</button>
                </div>
            </div>
        </div>
    );
}

export default Collection;