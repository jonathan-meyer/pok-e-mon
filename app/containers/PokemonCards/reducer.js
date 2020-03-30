/*
 *
 * PokemonCards reducer
 *
 */
import produce from 'immer';
import { CHANGE_SEARCH, SEARCH_SUCCESS } from './constants';

export const initialState = {
  data: null,
  search: '',
};

/* eslint-disable default-case, no-param-reassign */
const pokemonCardsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_SEARCH:
        draft.search = action.search;
        break;

      case SEARCH_SUCCESS:
        draft.data = action.data;
        break;
    }
  });

export default pokemonCardsReducer;
