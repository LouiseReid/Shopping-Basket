import React from 'react';
import Product from './Product';
import Basket from './Basket';
import update from 'react-addons-update';

class ProductList extends React.Component {
  state = {
    selectedProducts: [],
    basketTotal: 0
  }

  addToBasket(product){
    this.setState({
      selectedProducts: [...this.state.selectedProducts, product],
      basketTotal: this.state.basketTotal + product.price
    })
  }

  removeProduct(index) {
    this.setState(prevState => ({
      selectedProducts: update(prevState.selectedProducts, {$splice: [[index, 1]]})
    }))
  }

  // amendTotal(){
  //
  //   })
  //   this.setState(prevState =>{
  //     return {basketTotal: prevState.basketTotal + total}
  //   })
  // }


  render(){

    if(!this.props.items) return null;

    const products = this.props.items.map((product) =>{
      return <Product product={product} selected={this.addToBasket.bind(this)} key={product.id} />
    })

    return(
      <React.Fragment>
        <div>
          {products}
        </div>
        <div>
          <Basket items={this.state.selectedProducts} removeItem={this.removeProduct.bind(this)}/>
          <p>{this.state.basketTotal}</p>
        </div>
      </React.Fragment>

    )
  }
}




export default ProductList;
