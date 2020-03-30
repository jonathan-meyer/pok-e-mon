/**
 *
 * Asynchronously loads the component for PokemonCards
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
