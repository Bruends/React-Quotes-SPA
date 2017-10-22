import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';

const QuoteStyle = {
  fontWeight: '700',
  fontSize: '20pt'
};

class QuoteCard extends Component {
  render () {
    return (
      <div>
        <Panel>
          <blockquote style={QuoteStyle}>"{this.props.quote}"</blockquote>
          <cite>{this.props.author}</cite>
          <hr />
          <p>
            Quote From:
            <a href={this.props.apiLink}> {this.props.apiName} </a>
          </p>
          <Button bsStyle='primary' bsSize='small' onClick={this.props.newQuote}>
            Gimme Another!
          </Button>
        </Panel>
      </div>
    );
  }
}

export default QuoteCard;
