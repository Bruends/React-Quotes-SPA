import React, { Component } from 'react';

const style = {
  position: 'absolute',
  textAlign: 'center',
  padding: '15px',
  bottom: '0',
  width: '100%'
};

class Footer extends Component {
  render () {
    return (
      <footer style={style}>
        <p>
          Developed by: &nbsp;
          <a href='https://brunomendes41.github.io/'>
            Bruno Mendes
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
