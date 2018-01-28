import React from 'react';
import ProductList from '../components/ProductList';

class MainContainer extends React.Component {
  state = {
    products: [
      {id: 1, item: 'Peas', price: 0.95},
      {id: 2, item: 'Eggs', price: 2.10},
      {id: 3, item: 'Milk', price: 1.30},
      {id: 4, item: 'Beans', price: 0.73}
    ]
  }



  render(){
    return(
        <div>
          <ProductList items={this.state.products} basket={this.state.basket}/>
        </div>
    )
  }

}


export default MainContainer;
