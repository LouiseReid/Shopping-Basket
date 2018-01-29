import React from 'react';
import BasketItem from './BasketItem';
import Checkout from './Checkout';
import '../stylesheets/basket.css';


class Basket extends React.Component {
  state = {
    showCheckout: false
  }



  onCheckoutClick(){
    this.setState({
      showCheckout: true
    })
  }

  render(){

    if(!this.props.items) return null;

    const products = this.props.items.map((product, index) =>{
      return <BasketItem product={product} key={index} remove={this.props.removeItem}/>
    })

    return(
      <React.Fragment>
        <div className="basket">
          {products}
          <input type="submit" value="Checkout" onClick={this.onCheckoutClick.bind(this)} />
          { this.state.showCheckout ? <Checkout /> : null }
        </div>
      </React.Fragment>

    )
  }
}




export default Basket;
