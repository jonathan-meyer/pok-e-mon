/**
 *
 * Footer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Alert from 'react-bootstrap/Alert';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Footer() {
  return (
    <Alert>
      <FormattedMessage {...messages.copyright} />
    </Alert>
  );
}

Footer.propTypes = {};

export default Footer;
