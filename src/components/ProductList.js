import React from 'react';
import Product from './Product';
import Basket from './Basket';
import update from 'react-addons-update';
import '../stylesheets/productlist.css';

class ProductList extends React.Component {
  state = {
    selectedProducts: [],
    basketTotal: 0,
  }


  addToBasket(product){
    this.setState({
      selectedProducts: [...this.state.selectedProducts, product],
      basketTotal: this.state.basketTotal + product.price
    });
  }

  removeProduct(index, product) {
    this.setState(prevState => ({
      selectedProducts: update(prevState.selectedProducts, {$splice: [[index, 1]]}),
    }));
  }



  render(){

    if(!this.props.items) return null;

    const products = this.props.items.map((product) =>{
      return <Product product={product} selected={this.addToBasket.bind(this)} key={product.id} />
    })

    return(
      <React.Fragment>
        <div className="product-list">
          {products}
        </div>
        <div>
          <Basket items={this.state.selectedProducts} removeItem={this.removeProduct.bind(this)} currency={this.state.currency} total={this.state.basketTotal}/>
        </div>
      </React.Fragment>

    )
  }
}




export default ProductList;
