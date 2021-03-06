/**
 *
 * Menu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Menu({ user }) {
  return (
    <Navbar>
      <Navbar.Brand href="/">
        <Image width={30} src="ball.png" />{' '}
        <FormattedMessage {...messages.header} />
      </Navbar.Brand>
      <Nav className="mr-auto">
        {/* <Nav.Link href="/cards">Cards</Nav.Link> */}
      </Nav>
      <Nav>
        {user ? (
          <>
            <Nav.Link href="/profile">
              <FormattedMessage {...messages.profileLink} />
            </Nav.Link>
            <Nav.Link href="/logout">
              <FormattedMessage {...messages.logoutLink} />
            </Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link href="/login">
              <FormattedMessage {...messages.loginLink} />
            </Nav.Link>
            <Nav.Link href="/register">
              <FormattedMessage {...messages.regLink} />
            </Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
}

Menu.propTypes = {
  user: PropTypes.any,
};

export default Menu;
