import React from 'react';
import '../stylesheets/basketitem.css';


class BasketItem extends React.Component {
  state = {
    selectedProduct: []
  }

  selectProduct(item, price){
    this.setState({
      selectedProduct: {
        item: item,
        price: price
      }
    }, function(){
      this.props.remove(this.state.selectedProduct)
    })
  }


render(){
  let item = this.props.product.item;
  let price = this.props.product.price;

  return(
    <div className="basketitem">
      <p className="basket-item-description">{this.props.product.item} {this.props.product.price}</p>
      <button className="remove-button" onClick={this.selectProduct.bind(this, item, price)}>x</button>
    </div>

  )
}

}

export default BasketItem;
