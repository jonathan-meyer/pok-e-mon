import { startSearch } from '../actions';
import { SEARCH_START } from '../constants';

describe('PokemonCards actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: SEARCH_START,
      };
      expect(startSearch()).toEqual(expected);
    });
  });
});
