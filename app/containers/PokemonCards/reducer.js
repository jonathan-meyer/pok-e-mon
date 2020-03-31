/*
 *
 * PokemonCards reducer
 *
 */
import produce from 'immer';
import { CHANGE_SEARCH, SEARCH_SUCCESS, SEARCH_ERROR } from './constants';

export const initialState = {
  data: null,
  error: null,
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
        draft.error = null;
        break;

      case SEARCH_ERROR:
        draft.data = null;
        draft.error = action.error;
        break;
    }
  });

export default pokemonCardsReducer;
