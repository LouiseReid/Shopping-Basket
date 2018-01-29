import React from 'react';
import BasketItem from './BasketItem';
import '../stylesheets/basket.css';


class Basket extends React.Component {

  render(){

    if(!this.props.items) return null;

    const products = this.props.items.map((product, index) =>{
      return <BasketItem product={product} key={index} remove={this.props.removeItem}/>
    })

    return(
        <div className="basket">
          {products}
        </div>
    )
  }
}




export default Basket;
