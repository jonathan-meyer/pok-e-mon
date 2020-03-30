/*
 *
 * PokemonCards actions
 *
 */

import {
  CHANGE_SEARCH,
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from './constants';

export function changeSearch(search) {
  return {
    type: CHANGE_SEARCH,
    search,
  };
}

export function startSearch() {
  return { type: SEARCH_START };
}

export function searchSuccess(data) {
  return {
    type: SEARCH_SUCCESS,
    data,
  };
}

export function searchError(error) {
  return {
    type: SEARCH_ERROR,
    error,
  };
}
