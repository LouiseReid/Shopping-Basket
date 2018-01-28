import React from 'react';
import BasketItem from './BasketItem';

class Basket extends React.Component {

  render(){

    if(!this.props.items) return null;

    const products = this.props.items.map((product) =>{
      return <BasketItem product={product} key={product.id} />
    })

    return(
      <div>
        {products}
        <p>basket item</p>
        <p>basket item</p>
        <p>basket item</p>
      </div>
    )
  }
}




export default Basket;
