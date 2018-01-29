import React from 'react';
import '../stylesheets/product.css';


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
    }, function(){
      this.props.selected(this.state.selectedProduct)
    })
  }


  render(){
    let item = this.props.product.item;
    let price = this.props.product.price;

    return (
      <div className="product">
        <img src={this.props.product.image} alt={this.props.product.item}/>
        <p>{this.props.product.item}</p>
        <p>Price: {this.props.product.price}</p>
        <button onClick={this.selectProduct.bind(this, item, price)}>Add to Basket</button>
      </div>
    )
  }
}


export default Product;
