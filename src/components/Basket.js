import React from 'react';
import BasketItem from './BasketItem';

class Basket extends React.Component {
  state = {
    currency: []
  }

  componentDidMount() {
      fetch('http://apilayer.net/api/live?access_key=670432a506f39d4c9f17e7debcf474c9&currencies=AUD,EUR,GBP,PLN&format=1')
      .then(res => res.json())
      .then(currency => this.setState({ currency }));
    }

  render(){

    if(!this.props.items) return null;

    const products = this.props.items.map((product, index) =>{
      return <BasketItem product={product} key={index} remove={this.props.removeItem}/>
    })

    return(
      <div>
        {products}
      </div>
    )
  }
}




export default Basket;
