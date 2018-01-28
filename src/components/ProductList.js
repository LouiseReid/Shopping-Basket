import React from 'react';
import Product from './Product';
import Basket from './Basket';

class ProductList extends React.Component {
  state = {
    selectedProducts: []
  }

  addToBasket(product){
    this.setState({
      selectedProducts: [...this.state.selectedProducts, product]
    })
  }


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
          <Basket items={this.state.selectedProducts}/>
        </div>
      </React.Fragment>

    )
  }
}




export default ProductList;
