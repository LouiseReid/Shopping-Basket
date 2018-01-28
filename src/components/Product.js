import React from 'react';

class Product extends React.Component {
  state = {
    selectedProduct: []
  }

  selectProduct(item, price){
    this.setState({
      selectedProduct: {
        item: item,
        price: price
      }
    })
  }


  render(){
    let item = this.props.product.item;
    let price = this.props.product.price;
    
    return (
      <div>
        <p>{this.props.product.item}</p>
        <p>Price: {this.props.product.price}</p>
        <button onClick={this.selectProduct.bind(this, item, price)}>Add to Basket</button>
      </div>
    )
  }
}


export default Product;
