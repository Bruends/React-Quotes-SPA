import React, { Component } from 'react';
import axios from 'axios';

import CenterLayout from './../components/CenterLayout';
import QuoteCard from './../components/QuoteCard';

class Inspirational extends Component {
  constructor () {
    super();
    this.state = {
      quote: 'loading...',
      author: ''
    };
    this.setNewQuote = this.setNewQuote.bind(this);

    this.setNewQuote();
  }

  setNewQuote () {
    this.setState({quote: 'loading...'});
    const that = this;
    axios.get('https://talaikis.com/api/quotes/random/')
    .then((res) => {
      that.setState({quote: res.data.quote});
      that.setState({author: res.data.author});
    })
    .catch((err) => {
      window.alert('Ops, we have a bug :/');
      console.log(err);
    });
  }

  render () {
    return (
      <div>
        <CenterLayout>
          <h1>Random Quotes</h1>
          <QuoteCard
            quote={this.state.quote}
            author={this.state.author}
            apiName='Talaikis'
            apiLink='https://talaikis.com/random_quotes_api/'
            newQuote={this.setNewQuote}
          />
        </CenterLayout>
      </div>
    );
  }
}

export default Inspirational;
