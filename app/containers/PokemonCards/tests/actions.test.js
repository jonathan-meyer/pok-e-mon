import words from 'random-words';

import {
  startSearch,
  changeSearch,
  searchError,
  searchSuccess,
} from '../actions';

import {
  SEARCH_START,
  CHANGE_SEARCH,
  SEARCH_ERROR,
  SEARCH_SUCCESS,
} from '../constants';

describe('PokemonCards actions', () => {
  describe('Search Action', () => {
    it('has a type of SEARCH_START', () => {
      const expected = {
        type: SEARCH_START,
      };
      expect(startSearch()).toEqual(expected);
    });

    it('has a type of CHANGE_SEARCH', () => {
      const search = words();
      const expected = {
        type: CHANGE_SEARCH,
        search,
      };
      expect(changeSearch(search)).toEqual(expected);
    });

    it('has a type of SEARCH_ERROR', () => {
      const error = words();
      const expected = {
        type: SEARCH_ERROR,
        error,
      };
      expect(searchError(error)).toEqual(expected);
    });

    it('has a type of SEARCH_SUCCESS', () => {
      const data = { words: words(5) };
      const expected = {
        type: SEARCH_SUCCESS,
        data,
      };
      expect(searchSuccess(data)).toEqual(expected);
    });
  });
});
