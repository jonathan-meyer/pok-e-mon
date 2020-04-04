/*
 * PokemonCards Messages
 *
 * This contains all the text for the PokemonCards container.
 */

import { defineMessages } from 'react-intl';
import { simpleMessages } from 'utils/simpleMessages';

export const scope = 'app.containers.PokemonCards';

export default defineMessages(
  simpleMessages(scope, {
    header: 'Search',
  }),
);
