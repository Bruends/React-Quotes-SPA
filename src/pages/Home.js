import React, { Component } from 'react';
import CenterLayout from './../components/CenterLayout';
import Footer from './../components/Footer';

const style = { marginTop: '180px' };

class Home extends Component {
  render () {
    return (
      <div style={style}>
        <CenterLayout>
          <div>
            <h1>Quotes App</h1>
            <h2>choose a theme in menu for a random quote!</h2>
          </div>
        </CenterLayout>
        <Footer />
      </div>
    );
  }
}

export default Home;
