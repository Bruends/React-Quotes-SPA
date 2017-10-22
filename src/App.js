import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu';

import Home from './pages/Home';
import ProgrammingQuotes from './pages/Programming';
import ChuckNorrisQuotes from './pages/ChuckNorris';
import RandomQuotes from './pages/RandomQuotes';

class App extends Component {
  render () {
    return (
      <BrowserRouter >
        <div className='App'>
          <Menu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/programming' component={ProgrammingQuotes} />
            <Route path='/chuck' component={ChuckNorrisQuotes} />
            <Route path='/random' component={RandomQuotes} />
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
