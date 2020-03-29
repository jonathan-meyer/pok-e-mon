/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Container from 'react-bootstrap/Container';
import PokemonCards from '../../components/PokemonCards';

export default function HomePage() {
  return (
    <Container className="mt-3">
      <PokemonCards />
    </Container>
  );
}
