/**
 *
 * Login
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Login() {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  const { header, name, password, loginButton } = messages;

  return (
    <Card>
      <Card.Header>
        <FormattedMessage {...header} />
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group as={Row} controlId="name">
            <Form.Label column sm="2">
              <FormattedMessage {...name} />
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="password">
            <Form.Label column sm="2">
              <FormattedMessage {...password} />
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit">
            <FormattedMessage {...loginButton} />
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

Login.propTypes = {};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
