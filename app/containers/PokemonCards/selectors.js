import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pokemonCards state domain
 */

const selectPokemonCardsDomain = state => state.pokemonCards || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PokemonCards
 */

const makeSelectPokemonCards = () =>
  createSelector(
    selectPokemonCardsDomain,
    substate => substate,
  );

export default makeSelectPokemonCards;
export { selectPokemonCardsDomain };
