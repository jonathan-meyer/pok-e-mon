/*
 * PokemonCards Messages
 *
 * This contains all the text for the PokemonCards container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.PokemonCards';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the PokemonCards container!',
  },
});
