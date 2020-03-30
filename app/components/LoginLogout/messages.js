/*
 * LoginLogout Messages
 *
 * This contains all the text for the LoginLogout component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.LoginLogout';

export default defineMessages({
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
});
