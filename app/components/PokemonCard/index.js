/**
 *
 * PokemonCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Figure from 'react-bootstrap/Figure';

function PokemonCard({ name, id, imageUrl }) {
  return (
    <Figure className="m-2">
      <Figure.Image width={240} src={imageUrl} thumbnail />
      <Figure.Caption>
        {name} ({id})
      </Figure.Caption>
    </Figure>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  imageUrl: PropTypes.any,
};

export default PokemonCard;
