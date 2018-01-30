import React from 'react';
import BasketItem from './BasketItem';
import Checkout from './Checkout';
import '../stylesheets/basket.css';


class Basket extends React.Component {
  state = {
    showCheckout: false,
    removedItmes: []
  }

  onCheckoutClick(){
    this.setState({
      showCheckout: true
    })
  }

  addToRemovedItems(product){
    this.setState({
      removedItmes: [...this.state.removedItmes, product]
    })
  }


  render(){
    if(!this.props.items) return null;

    const products = this.props.items.map((product, index) =>{
      return <BasketItem product={product} key={index} remove={this.addToRemovedItems.bind(this)}/>
    })

    return(
      <React.Fragment>
        <div className="basket">
          {products}
          <input type="submit" value="Checkout" onClick={this.onCheckoutClick.bind(this)} />
          { this.state.showCheckout ? <Checkout total={this.props.total}/> : null }
        </div>
      </React.Fragment>

    )
  }
}




export default Basket;
