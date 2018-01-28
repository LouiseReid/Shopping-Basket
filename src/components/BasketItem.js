import React from 'react'

const BasketItem = (props) => {

  return(
    <div>
      <p>{props.product.item} {props.product.price}</p>
      <button onClick={props.remove.bind(this)}>x</button>
    </div>

  )
}

export default BasketItem;
