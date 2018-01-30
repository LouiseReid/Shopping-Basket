import React from 'react';
import '../stylesheets/checkout.css';


class Checkout extends React.Component {
  state = {
    currency: [],
    basketTotal: this.props.total,
    AUD: null,
    EUR: null,
    GBP: null,
    PLN: null,
    basketCurrency: 'USD'
  }

  componentDidMount() {
    fetch('http://apilayer.net/api/live?access_key=670432a506f39d4c9f17e7debcf474c9&currencies=AUD,EUR,GBP,PLN&format=1')
    .then(res => res.json())
    .then(currency => this.setState({ currency }));
  }

  AUDClick(){
    this.setState({
      AUD: this.state.currency.quotes.USDAUD
    }, function(){
      if(this.state.basketTotal === this.props.total){
        this.setState({
          basketTotal: this.state.basketTotal * this.state.AUD,
          basketCurrency: 'AUD'
        })
      }
    })
  }

  EURClick(){
    this.setState({
      EUR: this.state.currency.quotes.USDEUR
    }, function(){
      if(this.state.basketTotal === this.props.total){
        this.setState({
          basketTotal: this.state.basketTotal * this.state.EUR,
          basketCurrency: 'EUR'
        })
      }
    })
  }

  GBPClick(){
    this.setState({
      GBP: this.state.currency.quotes.USDGBP
    }, function(){
      if(this.state.basketTotal === this.props.total){
        this.setState({
          basketTotal: this.state.basketTotal * this.state.GBP,
          basketCurrency: 'GBP'
        })
      }
    })
  }

  PLNClick(){
    this.setState({
      PLN: this.state.currency.quotes.USDPLN
    }, function(){
      if(this.state.basketTotal === this.props.total){
        this.setState({
          basketTotal: this.state.basketTotal * this.state.PLN,
          basketCurrency: 'PLN'
        })
      }
    })
  }

  resetCurrency(){
    this.setState({
      basketTotal: this.props.total
    })
  }


  render(){
    return(
      <React.Fragment>
        <p>Total: {this.state.basketTotal.toFixed(2)} {this.state.basketCurrency}</p>
        <p>select currency:</p>
        <div className="currency-buttons">
          <button className="aud" onClick={this.AUDClick.bind(this)}></button>
          <button className="eur" onClick={this.EURClick.bind(this)}></button>
          <button className="gbp" onClick={this.GBPClick.bind(this)}></button>
          <button className="pln" onClick={this.PLNClick.bind(this)}></button>
        </div>
        <button className="reset" onClick={this.resetCurrency.bind(this)}>Reset Currency</button>
      </React.Fragment>

    )
  }


}

export default Checkout;
