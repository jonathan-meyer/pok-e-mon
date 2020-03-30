/**
 *
 * LoginLogout
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function LoginLogout({ user }) {
  return (
    <div>
      [
      <Link to="/login">
        {(user && <FormattedMessage {...messages.logout} />) || (
          <FormattedMessage {...messages.login} />
        )}
      </Link>
      ]
    </div>
  );
}

LoginLogout.propTypes = {
  user: PropTypes.any,
};

export default LoginLogout;
