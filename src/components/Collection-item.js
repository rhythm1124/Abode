import React from 'react';
import './Collection-item.css';

const CltItem = ({ img, img_title, price, addToCart }) => {
  return (
    <div className="grid-item">
      <img src={img} alt={img_title} />
      <h3>{img_title}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default CltItem;
