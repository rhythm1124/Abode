import React from 'react';
import './Collection.css';
import {CollectionList} from './Collection-item-list.js';
import CltItem from './Collection-item.js';

const Collection = () => {
    return(
        <div className="collection-container">
            <div className="content-container">
                <h1>title</h1>
                <p>summary types</p>
            </div>
            <div className="collection-grid-container">
                <div className="collection-item">
                    {CollectionList.map((item, key) => {
                    {console.log(item.name)}
                    return(
                        <CltItem
                            key={item} 
                            img={item.image} 
                            img_title={item.name} 
                            price={item.price}
                        />
                    );
                })}
                </div>
            </div>
        </div>
    );
}

export default Collection;