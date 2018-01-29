import React from 'react';
import Product from './Product';
import Basket from './Basket';
import update from 'react-addons-update';
import '../stylesheets/productlist.css';


class ProductList extends React.Component {
  state = {
    selectedProducts: [],
    basketTotal: 0,
    currency: []
  }

  componentDidMount() {
    fetch('http://apilayer.net/api/live?access_key=670432a506f39d4c9f17e7debcf474c9&currencies=AUD,EUR,GBP,PLN&format=1')
    .then(res => res.json())
    .then(currency => this.setState({ currency }));
  }

  addToBasket(product){
    this.setState({
      selectedProducts: [...this.state.selectedProducts, product],
      basketTotal: this.state.basketTotal + product.price
    });
  }

  removeProduct(index) {
    this.setState(prevState => ({
      selectedProducts: update(prevState.selectedProducts, {$splice: [[index, 1]]}),
    }));
  }

  setEUR(){
      this.setState({
        basketTotal: this.state.basketTotal * this.state.currency.quotes.USDEUR
      })
  }

  setAUD(){
    this.setState({
      basketTotal: this.state.basketTotal * this.state.currency.quotes.USDAUD
    })
  }

  setGPB(){
    this.setState({
      basketTotal: this.state.basketTotal * this.state.currency.quotes.USDGPB
    })
  }

  setPLN(){
    this.setState({
      basketTotal: this.state.basketTotal * this.state.currency.quotes.USDPLN
    })
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
          <Basket items={this.state.selectedProducts} removeItem={this.removeProduct.bind(this)} currency={this.state.currency}/>
          <p>{this.state.basketTotal.toFixed(2)}</p>
          <button onClick={this.setAUD.bind(this)}>AUD</button>
          <button onClick={this.setEUR.bind(this)}>EUR</button>
          <button onClick={this.setGPB.bind(this)}>GPB</button>
          <button onClick={this.setPLN.bind(this)}>PLN</button>
        </div>
      </React.Fragment>

    )
  }
}




export default ProductList;
