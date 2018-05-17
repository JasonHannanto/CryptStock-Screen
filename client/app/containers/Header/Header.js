import React from 'react';
import {Navbar, NavItem, Nav, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar id="navbar-custom">
    <Navbar.Header>
      <Navbar.Brand>
        <a id="brand" href="/">CryptStock Screen</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/">
        Home
      </NavItem>
      <NavItem eventKey={2} href="/profile">
        Stock Portfolio
      </NavItem>
      <NavItem eventKey={2} href="/profile">
        Crypto Portfolio
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
