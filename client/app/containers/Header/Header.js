import React from 'react';
import {Navbar, NavItem, Nav, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">CryptStock Screen</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/">
        Home
      </NavItem>
      <NavItem eventKey={2} href="/profile">
        Stock Portfolio
      </NavItem>
      <NavItem eventKey={2} href="/cryptscreen">
        Crypto Portfolio
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
