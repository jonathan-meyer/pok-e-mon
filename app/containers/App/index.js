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

import Menu from 'components/Menu';
import Footer from 'components/Footer';

// import HomePage from 'containers/HomePage/Loadable';
import PokemonCards from 'containers/PokemonCards/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Login from 'containers/Login/Loadable';

import Container from 'react-bootstrap/Container';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Container>
        <Menu />
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route exact path="/" component={PokemonCards} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Container>
      <GlobalStyle />
    </div>
  );
}
