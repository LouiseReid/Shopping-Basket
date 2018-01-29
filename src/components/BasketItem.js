import React from 'react';
import '../stylesheets/basketitem.css';


const BasketItem = (props) => {

  return(
    <div className="basketitem">
      <p className="basket-item-description">{props.product.item} {props.product.price}</p>
      <button className="remove-button" onClick={props.remove.bind(this)}>x</button>
    </div>

  )
}

export default BasketItem;
