import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import RouterLinks from './RouterLinks';

const style = {borderRadius: '0'};
const navStyle = {marginTop: '22px'};

class Menu extends Component {
  render () {
    return (
      <Navbar style={style}>
        <Navbar.Header>
          <Nav style={navStyle}>
            <RouterLinks />
          </Nav>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Menu;
