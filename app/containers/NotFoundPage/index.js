/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Alert from 'react-bootstrap/Alert';

import messages from './messages';

export default function NotFound() {
  return (
    <Alert variant="danger">
      <FormattedMessage {...messages.header} />
    </Alert>
  );
}
