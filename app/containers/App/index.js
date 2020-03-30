/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginLogout from 'components/LoginLogout';

import HomePage from 'containers/HomePage/Loadable';
import PokemonCards from 'containers/PokemonCards/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Container from 'react-bootstrap/Container';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Container className="mt-3">
        <LoginLogout />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cards" component={PokemonCards} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
      <GlobalStyle />
    </div>
  );
}
