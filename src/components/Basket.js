import React from 'react';
import BasketItem from './BasketItem';

class Basket extends React.Component {

  render(){

    if(!this.props.items) return null;

    const products = this.props.items.map((product, index) =>{
      return <BasketItem product={product} key={index} />
    })

    return(
      <div>
        {products}
      </div>
    )
  }
}




export default Basket;
