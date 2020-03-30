/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

export default function HomePage() {
  return (
    <Card className="mt-2">
      <Card.Header>
        <h2>HomePage</h2>
      </Card.Header>
      <Card.Body>
        <Link to="/cards">Cards</Link>
      </Card.Body>
    </Card>
  );
}
