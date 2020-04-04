/**
 *
 * PokemonCards
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';

import PokemonCard from 'components/PokemonCard';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { changeSearch, startSearch } from './actions';
import makeSelectPokemonCards from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function PokemonCards({
  pokemonCards,
  handleChange,
  handleClick,
  handleSubmit,
}) {
  useInjectReducer({ key: 'pokemonCards', reducer });
  useInjectSaga({ key: 'pokemonCards', saga });

  const { search, data, error } = pokemonCards;

  return (
    <Card>
      <Card.Header>
        <FormattedMessage {...messages.header} />
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit} className="mb-3">
          <InputGroup>
            <Form.Control
              onChange={handleChange}
              value={search}
              spellCheck={false}
            />
            <InputGroup.Append>
              <Button onClick={handleClick}>Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>

        {error && <Alert variant="danger">{error.message}</Alert>}

        {data && data.length === 0 && (
          <Alert variant="danger">No Cards Found</Alert>
        )}

        {data && data.length > 0 && (
          <Alert>
            {data.map(card => (
              <PokemonCard key={card.id} {...card} />
            ))}
          </Alert>
        )}
        {/* <Alert variant="info">
          <pre>{JSON.stringify(pokemonCards, null, 2)} </pre>
        </Alert> */}
      </Card.Body>
    </Card>
  );
}

PokemonCards.propTypes = {
  pokemonCards: PropTypes.any,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  handleSubmit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  pokemonCards: makeSelectPokemonCards(),
});

const mapDispatchToProps = dispatch => ({
  handleChange: e => {
    dispatch(changeSearch(e.target.value));
  },

  handleClick: () => {
    dispatch(startSearch());
  },

  handleSubmit: e => {
    e.preventDefault();
    dispatch(startSearch());
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PokemonCards);
