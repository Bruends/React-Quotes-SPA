import React, { Component } from 'react';
import axios from 'axios';

import CenterLayout from './../components/CenterLayout';
import QuoteCard from './../components/QuoteCard';

class ChuckNorris extends Component {
  constructor () {
    super();
    this.state = {
      quote: 'loading...'
    };

    this.setNewQuote = this.setNewQuote.bind(this);
    this.setNewQuote();
  }

  setNewQuote () {
    this.setState({quote: 'loading...'});
    const that = this;
    axios.get('https://api.chucknorris.io/jokes/random')
    .then((res) => { that.setState({quote: res.data.value}); })
    .catch((err) => {
      window.alert('Ops, we have a bug :/');
      console.log(err);
    });
  }

  render () {
    return (
      <div>
        <CenterLayout>
          <h1>Chuck Norris Quotes</h1>
          <QuoteCard
            quote={this.state.quote}
            author='Chuck Norris'
            apiName='ChuckNorris.io'
            apiLink='https://api.chucknorris.io'
            newQuote={this.setNewQuote}
          />
        </CenterLayout>
      </div>
    );
  }
}

export default ChuckNorris;
