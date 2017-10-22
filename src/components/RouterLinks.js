import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const style = { marginLeft: '40px' };

class RouterLinks extends Component {
  render () {
    return (
      <div>
        <NavLink exact style={style} activeStyle={{fontWeight: 700}} to='/'>
          Home
        </NavLink>
        <NavLink style={style} activeStyle={{fontWeight: 700}} to='/programming'>
          programming Quotes
        </NavLink>
        <NavLink style={style} activeStyle={{fontWeight: 700}} to='/chuck'>
          ChuckNorris Quotes
        </NavLink>
        <NavLink style={style} activeStyle={{fontWeight: 700}}to='/random'>
          Random Quotes
        </NavLink>
      </div>
    );
  }
}

export default RouterLinks;
