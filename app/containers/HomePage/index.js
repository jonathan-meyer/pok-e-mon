/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Card from 'react-bootstrap/Card';

import messages from './messages';

export default function HomePage() {
  return (
    <Card>
      <Card.Header>
        <h2>
          <FormattedMessage {...messages.header} />
        </h2>
      </Card.Header>
      <Card.Body>
        <p>Now is the time to have a virtual Pokémon game.</p>
      </Card.Body>
    </Card>
  );
}
