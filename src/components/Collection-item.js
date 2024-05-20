import React, { useState } from 'react';
import './Collection-item.css';

function CltItem({img_title, img, price}){
    const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleDelete = () => {
    setQuantity(0);
  };

    return(
      <div className="grid-container">
        <div className="grid-item">
          <img src={img} className="item-img" alt="product"/>
          <h2>{img_title}</h2>
          <p>${price}</p>

          <br />

          <div className="tags">
            <button onClick={handleIncrement}>+</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={handleDecrement}>-</button>
            <button className="del" onClick={handleDelete}>Del</button>
          </div>

        </div>
      </div>
    );
}

export default CltItem;