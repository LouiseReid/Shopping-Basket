import React from 'react';

class Checkout extends React.Component {
  state = {
    currency: [],
    basketTotal: this.props.total,
    AUD: null,
    EUR: null,
    GBP: null,
    PLN: null
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
          basketTotal: this.state.basketTotal * this.state.AUD
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
          basketTotal: this.state.basketTotal * this.state.EUR
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
          basketTotal: this.state.basketTotal * this.state.GBP
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
          basketTotal: this.state.basketTotal * this.state.PLN
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
        <p>total: {this.state.basketTotal.toFixed(2)}</p>
        <button onClick={this.AUDClick.bind(this)}>AUD</button>
        <button onClick={this.EURClick.bind(this)}>EUR</button>
        <button onClick={this.GBPClick.bind(this)}>GBP</button>
        <button onClick={this.PLNClick.bind(this)}>PLN</button>
        <button onClick={this.resetCurrency.bind(this)}>Reset Currency</button>
      </React.Fragment>

    )
  }


}

export default Checkout;
