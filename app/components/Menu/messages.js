/*
 * Menu Messages
 *
 * This contains all the text for the Menu component.
 */

import { defineMessages } from 'react-intl';
import { simpleMessages } from 'utils/simpleMessages';

export const scope = 'app.components.Menu';

export default defineMessages(
  simpleMessages(scope, {
    header: 'Pokémon Cards',
    profileLink: 'Profile',
    loginLink: 'Login',
    logoutLink: 'Logout',
    regLink: 'Register',
  }),
);
