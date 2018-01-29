import React from 'react';
import ProductList from '../components/ProductList';
import '../stylesheets/maincontainer.css';


class MainContainer extends React.Component {
  state = {
    products: [
      {id: 1, item: 'Peas', price: 0.95, image: "https://img.tesco.com/Groceries/pi/711/5031021614711/IDShot_225x225.jpg"},
      {id: 2, item: 'Eggs', price: 2.10, image:"https://img.tesco.com/Groceries/pi/471/5051140150471/IDShot_225x225.jpg"},
      {id: 3, item: 'Milk', price: 1.30, image:"https://img.tesco.com/Groceries/pi/457/5000436589457/IDShot_225x225.jpg"},
      {id: 4, item: 'Beans', price: 0.73, image:"https://img.tesco.com/Groceries/pi/671/5000157024671/IDShot_225x225.jpg"}
    ]
  }



  render(){
    return(
        <div>
          <header>LOUISECO</header>
          <ProductList items={this.state.products} basket={this.state.basket}/>
        </div>
    )
  }

}


export default MainContainer;
