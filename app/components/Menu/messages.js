/*
 * Menu Messages
 *
 * This contains all the text for the Menu component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Menu';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Pokémon Cards',
  },
  profile: {
    id: `${scope}.profile`,
    defaultMessage: 'Profile',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
});
