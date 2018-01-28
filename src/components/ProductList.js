import React from 'react';
import Product from './Product';

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
      <div>
        {products}
      </div>
    )
  }
}




export default ProductList;
