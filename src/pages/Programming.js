import React, { Component } from 'react';
import axios from 'axios';

import CenterLayout from './../components/CenterLayout';
import QuoteCard from './../components/QuoteCard';

class ProgrammingQuotes extends Component {
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
    axios.get('http://quotes.stormconsultancy.co.uk/random.json')
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
          <h1>Programming Quotes</h1>
          <QuoteCard
            quote={this.state.quote}
            author={this.state.author}
            apiName='Storm Consultancy'
            apiLink='http://quotes.stormconsultancy.co.uk/api'
            newQuote={this.setNewQuote}
          />
        </CenterLayout>
      </div>
    );
  }
}

export default ProgrammingQuotes;
